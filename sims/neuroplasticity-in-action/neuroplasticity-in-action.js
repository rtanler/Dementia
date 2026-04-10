// Neuroplasticity in Action
// CANVAS_HEIGHT: 700
// Abstract neural network MicroSim showing synaptic strengthening with practice
// and weakening with disuse. Uses only nodes (circles) and edges (lines).

let canvasWidth = 900;
let drawHeight = 480;
let controlHeight = 200;
let canvasHeight = drawHeight + controlHeight + 20; // 700

// Simulation state
let nodes = [];
let edges = [];
let particles = [];
let synapseStrength = 20; // 0-100
let practiceCount = 0;
let daysSinceLastPractice = 0;
let message = "";
let messageTimer = 0;

// Controls
let practiceBtn, practice10Btn, restBtn, resetBtn;
let quizContainer;
let quizShown = false;
let quizAnswers = [-1, -1, -1];
let quizSubmitted = false;
let quizScoreText = "";

const QUIZ = [
    {
        q: "Hebbian learning is summarized as...",
        opts: [
            "Neurons that fire together, wire together",
            "Practice makes permanent damage",
            "All neurons connect to all others",
            "Memories live in one single neuron"
        ],
        correct: 0
    },
    {
        q: "Synapses get STRONGER with...",
        opts: [
            "Long periods of rest",
            "Repeated practice",
            "Eating sugar",
            "Watching others practice"
        ],
        correct: 1
    },
    {
        q: "What happens to unused synapses?",
        opts: [
            "They stay exactly the same forever",
            "They grow stronger automatically",
            "They weaken (use it or lose it)",
            "They turn into new neurons"
        ],
        correct: 2
    }
];

// Helper to update canvas size from container
function updateCanvasSize() {
    const container = document.querySelector('main');
    if (container) {
        const rect = container.getBoundingClientRect();
        if (rect.width > 0) {
            canvasWidth = Math.floor(rect.width);
        } else if (window.innerWidth > 0) {
            canvasWidth = Math.min(window.innerWidth, 900);
        }
    }
}

function setup() {
    updateCanvasSize();
    const cnv = createCanvas(canvasWidth, canvasHeight);
    cnv.parent(document.querySelector('main'));
    textFont('Segoe UI');

    initNetwork();
    setupControls();
}

function windowResized() {
    updateCanvasSize();
    resizeCanvas(canvasWidth, canvasHeight);
    initNetwork();
    layoutControls();
}

function initNetwork() {
    // 6 abstract neuron nodes arranged in a loose network in the top draw area
    nodes = [];
    const cx = canvasWidth / 2;
    const cy = drawHeight / 2 + 20;
    const r = Math.min(canvasWidth, drawHeight) * 0.32;

    // Place 6 nodes: 1 central + 5 ring
    nodes.push({ x: cx, y: cy, r: 26, label: "N1" });
    for (let i = 0; i < 5; i++) {
        const angle = -HALF_PI + i * (TWO_PI / 5);
        nodes.push({
            x: cx + r * Math.cos(angle),
            y: cy + r * Math.sin(angle),
            r: 24,
            label: "N" + (i + 2)
        });
    }

    // Edges: connect center to all outer + outer ring
    edges = [];
    for (let i = 1; i < 6; i++) {
        edges.push({ a: 0, b: i, fireTimer: 0 });
    }
    for (let i = 1; i < 6; i++) {
        const j = i === 5 ? 1 : i + 1;
        edges.push({ a: i, b: j, fireTimer: 0 });
    }

    particles = [];
}

function setupControls() {
    practiceBtn = createButton('Practice');
    practiceBtn.mousePressed(() => doPractice(1));

    practice10Btn = createButton('Practice 10x');
    practice10Btn.mousePressed(() => doPractice(10));

    restBtn = createButton('Rest 1 Week');
    restBtn.mousePressed(doRest);

    resetBtn = createButton('Reset');
    resetBtn.mousePressed(doReset);

    [practiceBtn, practice10Btn, restBtn, resetBtn].forEach(b => {
        b.style('padding', '8px 14px');
        b.style('font-size', '13px');
        b.style('font-family', 'Segoe UI, sans-serif');
        b.style('border', 'none');
        b.style('border-radius', '6px');
        b.style('cursor', 'pointer');
        b.style('color', 'white');
        b.style('font-weight', '500');
    });
    practiceBtn.style('background', '#3b82f6');
    practice10Btn.style('background', '#8b5cf6');
    restBtn.style('background', '#f59e0b');
    resetBtn.style('background', '#64748b');

    layoutControls();
}

function layoutControls() {
    const y = drawHeight + 12;
    const startX = 20;
    let x = startX;
    practiceBtn.position(x, y); x += 100;
    practice10Btn.position(x, y); x += 120;
    restBtn.position(x, y); x += 120;
    resetBtn.position(x, y);
}

function doPractice(n) {
    for (let i = 0; i < n; i++) {
        // Diminishing returns curve
        const gain = Math.max(1, (100 - synapseStrength) * 0.05);
        synapseStrength = Math.min(100, synapseStrength + gain);
        practiceCount++;
        // Fire all edges with particles
        edges.forEach((e, idx) => {
            e.fireTimer = 60 + idx * 3;
            spawnParticle(e);
        });
    }
    daysSinceLastPractice = 0;
    message = n === 1 ? "Practice session complete!" : "10 practice sessions complete!";
    messageTimer = 120;

    if (practiceCount >= 5 && !quizShown) {
        showQuiz();
    }
}

function doRest() {
    synapseStrength = Math.max(0, synapseStrength - 5);
    daysSinceLastPractice += 7;
    message = daysSinceLastPractice >= 28
        ? "Use it or lose it — pathways need maintenance"
        : "Some connections weakening from disuse";
    messageTimer = 150;
}

function doReset() {
    synapseStrength = 20;
    practiceCount = 0;
    daysSinceLastPractice = 0;
    message = "";
    messageTimer = 0;
    particles = [];
    edges.forEach(e => e.fireTimer = 0);
    if (quizShown) {
        hideQuiz();
    }
}

function spawnParticle(edge) {
    particles.push({
        edgeIdx: edges.indexOf(edge),
        t: 0,
        speed: 0.02 + (synapseStrength / 100) * 0.03
    });
}

function draw() {
    background(248, 249, 250);

    drawTitleBar();
    drawNetwork();
    drawParticles();
    drawControlsPanel();

    if (messageTimer > 0) messageTimer--;
    daysSinceLastPracticeTick();
}

let tickCounter = 0;
function daysSinceLastPracticeTick() {
    tickCounter++;
    if (tickCounter >= 180) { // ~3 sec
        tickCounter = 0;
        daysSinceLastPractice++;
    }
}

function drawTitleBar() {
    noStroke();
    fill(30, 58, 138);
    rect(0, 0, canvasWidth, 50);
    fill(255);
    textSize(18);
    textAlign(LEFT, CENTER);
    textStyle(BOLD);
    text("Neuroplasticity in Action", 20, 25);
    textStyle(NORMAL);
    textSize(12);
    textAlign(RIGHT, CENTER);
    text("Abstract neural network — practice strengthens synapses", canvasWidth - 20, 25);
}

function getSynapseColor(strength) {
    // Pale blue -> bright blue -> deep blue -> purple
    if (strength < 33) {
        const t = strength / 33;
        return lerpColor(color(190, 220, 245), color(59, 130, 246), t);
    } else if (strength < 66) {
        const t = (strength - 33) / 33;
        return lerpColor(color(59, 130, 246), color(30, 58, 138), t);
    } else {
        const t = (strength - 66) / 34;
        return lerpColor(color(30, 58, 138), color(139, 92, 246), t);
    }
}

function drawNetwork() {
    // Panel background for viz area
    noStroke();
    fill(255);
    rect(10, 60, canvasWidth - 20, drawHeight - 70, 8);

    // Strength meter (top-right of viz area)
    drawStrengthMeter(canvasWidth - 250, 75, 230, 22);

    // Skill level and stats (top-left)
    drawStats();

    // Draw edges
    const strokeW = 1 + (synapseStrength / 100) * 8;
    const col = getSynapseColor(synapseStrength);
    // Glow for very strong synapses
    if (synapseStrength >= 75) {
        for (let gw = 6; gw >= 1; gw--) {
            stroke(red(col), green(col), blue(col), 25);
            strokeWeight(strokeW + gw * 2);
            edges.forEach(e => {
                const a = nodes[e.a], b = nodes[e.b];
                line(a.x, a.y, b.x, b.y);
            });
        }
    }
    stroke(col);
    strokeWeight(strokeW);
    edges.forEach(e => {
        const a = nodes[e.a], b = nodes[e.b];
        line(a.x, a.y, b.x, b.y);
    });

    // Draw dendritic sprouts (small extra branches scaled by strength)
    drawDendriticSprouts();

    // Draw nodes
    for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        // Outer glow when strength high
        if (synapseStrength >= 75) {
            noStroke();
            fill(139, 92, 246, 40);
            circle(n.x, n.y, n.r * 2 + 16);
        }
        // Body
        stroke(30, 58, 138);
        strokeWeight(2);
        const nodeCol = lerpColor(color(219, 234, 254), color(99, 102, 241), synapseStrength / 100);
        fill(nodeCol);
        circle(n.x, n.y, n.r * 2);
        // Label
        noStroke();
        fill(30, 41, 59);
        textAlign(CENTER, CENTER);
        textSize(12);
        textStyle(BOLD);
        text(n.label, n.x, n.y);
        textStyle(NORMAL);
    }

    // Message overlay
    if (messageTimer > 0 && message) {
        const alpha = Math.min(255, messageTimer * 2.5);
        noStroke();
        fill(254, 243, 199, alpha);
        rectMode(CENTER);
        rect(canvasWidth / 2, drawHeight - 30, 420, 32, 6);
        rectMode(CORNER);
        fill(120, 53, 15, alpha);
        textAlign(CENTER, CENTER);
        textSize(13);
        text(message, canvasWidth / 2, drawHeight - 30);
    }
}

function drawDendriticSprouts() {
    // Deterministic small branches at each outer node, count based on practice
    const branchCount = Math.min(6, Math.floor(practiceCount / 3));
    stroke(getSynapseColor(synapseStrength));
    strokeWeight(1.5);
    for (let i = 1; i < nodes.length; i++) {
        const n = nodes[i];
        const centerNode = nodes[0];
        const awayAngle = Math.atan2(n.y - centerNode.y, n.x - centerNode.x);
        for (let s = 0; s < branchCount; s++) {
            const seed = i * 13 + s * 7;
            const angleOffset = ((seed % 100) / 100 - 0.5) * 1.4;
            const a = awayAngle + angleOffset;
            const len = 14 + (seed % 8);
            const x2 = n.x + Math.cos(a) * len;
            const y2 = n.y + Math.sin(a) * len;
            line(n.x + Math.cos(a) * (n.r + 1), n.y + Math.sin(a) * (n.r + 1), x2, y2);
            // Tiny tip
            noStroke();
            fill(getSynapseColor(synapseStrength));
            circle(x2, y2, 3);
            stroke(getSynapseColor(synapseStrength));
            strokeWeight(1.5);
        }
    }
}

function drawStrengthMeter(x, y, w, h) {
    noStroke();
    fill(241, 245, 249);
    rect(x, y, w, h, 4);
    const fillW = (synapseStrength / 100) * w;
    fill(getSynapseColor(synapseStrength));
    rect(x, y, fillW, h, 4);
    stroke(203, 213, 225);
    strokeWeight(1);
    noFill();
    rect(x, y, w, h, 4);
    noStroke();
    fill(30, 41, 59);
    textAlign(CENTER, CENTER);
    textSize(12);
    textStyle(BOLD);
    text("Synapse Strength: " + Math.round(synapseStrength) + "%", x + w / 2, y + h / 2);
    textStyle(NORMAL);
}

function getSkillLevel() {
    if (synapseStrength < 30) return "Beginner";
    if (synapseStrength < 50) return "Novice";
    if (synapseStrength < 70) return "Intermediate";
    if (synapseStrength < 88) return "Advanced";
    return "Expert";
}

function drawStats() {
    fill(30, 41, 59);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(13);
    textStyle(BOLD);
    text("Skill Level: " + getSkillLevel(), 25, 75);
    textStyle(NORMAL);
    textSize(12);
    text("Practice sessions: " + practiceCount, 25, 95);
    text("Days since last practice: " + daysSinceLastPractice, 25, 112);
}

function drawParticles() {
    // Update and draw particles traveling along edges
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.t += p.speed;
        if (p.t >= 1) {
            particles.splice(i, 1);
            continue;
        }
        const e = edges[p.edgeIdx];
        if (!e) { particles.splice(i, 1); continue; }
        const a = nodes[e.a], b = nodes[e.b];
        const px = lerp(a.x, b.x, p.t);
        const py = lerp(a.y, b.y, p.t);
        noStroke();
        fill(255, 255, 180, 220);
        circle(px, py, 6);
        fill(255, 255, 255, 180);
        circle(px, py, 3);
    }

    // Periodic firing for visual life
    if (frameCount % 45 === 0) {
        const idx = Math.floor(random(edges.length));
        spawnParticle(edges[idx]);
    }
}

function drawControlsPanel() {
    // Control panel background
    noStroke();
    fill(241, 245, 249);
    rect(0, drawHeight, canvasWidth, canvasHeight - drawHeight);
    stroke(226, 232, 240);
    strokeWeight(1);
    line(0, drawHeight, canvasWidth, drawHeight);

    // Instructional text below buttons
    noStroke();
    fill(71, 85, 105);
    textAlign(LEFT, TOP);
    textSize(11);
    textStyle(ITALIC);
    const hintY = drawHeight + 55;
    text('Tip: "Neurons that fire together, wire together" — Hebbian Learning', 20, hintY);
    text('Practice 5 times to unlock the quiz below.', 20, hintY + 16);
    textStyle(NORMAL);

    // Quiz hint / status
    if (!quizShown) {
        fill(30, 58, 138);
        textAlign(RIGHT, TOP);
        textSize(12);
        textStyle(BOLD);
        text("Quiz unlocks at 5 practice sessions (" + Math.min(practiceCount, 5) + "/5)", canvasWidth - 20, hintY);
        textStyle(NORMAL);
    } else {
        fill(30, 58, 138);
        textAlign(RIGHT, TOP);
        textSize(12);
        textStyle(BOLD);
        text("Quiz available below — scroll to view", canvasWidth - 20, hintY);
        textStyle(NORMAL);
    }

    // If quiz submitted, display score
    if (quizSubmitted && quizScoreText) {
        fill(16, 185, 129);
        textAlign(CENTER, TOP);
        textSize(13);
        textStyle(BOLD);
        text(quizScoreText, canvasWidth / 2, hintY + 40);
        textStyle(NORMAL);
    }
}

// ======== QUIZ (DOM-based) ========
function showQuiz() {
    if (quizShown) return;
    quizShown = true;
    const main = document.querySelector('main');
    quizContainer = document.createElement('div');
    quizContainer.id = 'quiz-container';
    quizContainer.style.cssText = 'max-width:900px;margin:10px auto;padding:20px;background:#f8fafc;border-top:3px solid #3b82f6;font-family:Segoe UI,sans-serif;';

    const title = document.createElement('h2');
    title.textContent = 'Check Your Understanding';
    title.style.cssText = 'color:#1e3a8a;margin:0 0 14px 0;font-size:20px;';
    quizContainer.appendChild(title);

    QUIZ.forEach((q, qi) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'quiz-q';
        qDiv.style.cssText = 'background:white;border-radius:8px;padding:14px;margin-bottom:12px;border:1px solid #e2e8f0;';
        const qText = document.createElement('div');
        qText.textContent = (qi + 1) + '. ' + q.q;
        qText.style.cssText = 'font-weight:600;color:#1e293b;margin-bottom:10px;';
        qDiv.appendChild(qText);

        q.opts.forEach((opt, oi) => {
            const optDiv = document.createElement('div');
            optDiv.textContent = opt;
            optDiv.style.cssText = 'display:block;padding:8px 12px;margin:6px 0;border:2px solid #e2e8f0;border-radius:6px;cursor:pointer;font-size:14px;background:white;transition:all 0.2s;';
            optDiv.addEventListener('mouseenter', () => { if (!quizSubmitted) optDiv.style.borderColor = '#3b82f6'; });
            optDiv.addEventListener('mouseleave', () => {
                if (quizSubmitted) return;
                optDiv.style.borderColor = (quizAnswers[qi] === oi) ? '#3b82f6' : '#e2e8f0';
            });
            optDiv.addEventListener('click', () => {
                if (quizSubmitted) return;
                quizAnswers[qi] = oi;
                // Reset siblings
                const siblings = qDiv.querySelectorAll('div[data-opt]');
                siblings.forEach(s => {
                    s.style.borderColor = '#e2e8f0';
                    s.style.background = 'white';
                });
                optDiv.style.borderColor = '#3b82f6';
                optDiv.style.background = '#eff6ff';
            });
            optDiv.setAttribute('data-opt', oi);
            qDiv.appendChild(optDiv);
        });

        quizContainer.appendChild(qDiv);
    });

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Submit Answers';
    submitBtn.style.cssText = 'background:#10b981;color:white;border:none;padding:10px 18px;border-radius:6px;cursor:pointer;font-size:14px;font-weight:500;';
    submitBtn.addEventListener('click', () => submitQuiz(submitBtn));
    quizContainer.appendChild(submitBtn);

    main.appendChild(quizContainer);
}

function submitQuiz(submitBtn) {
    if (quizAnswers.includes(-1)) {
        alert('Please answer all questions before submitting.');
        return;
    }
    let score = 0;
    const qDivs = quizContainer.querySelectorAll('.quiz-q');
    qDivs.forEach((qDiv, qi) => {
        const correctIdx = QUIZ[qi].correct;
        const userIdx = quizAnswers[qi];
        const opts = qDiv.querySelectorAll('div[data-opt]');
        opts.forEach((o, oi) => {
            if (oi === correctIdx) {
                o.style.borderColor = '#10b981';
                o.style.background = '#d1fae5';
                o.style.color = '#065f46';
            } else if (oi === userIdx) {
                o.style.borderColor = '#ef4444';
                o.style.background = '#fee2e2';
                o.style.color = '#991b1b';
            }
        });
        if (userIdx === correctIdx) score++;
    });
    quizSubmitted = true;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitted';
    submitBtn.style.background = '#94a3b8';
    submitBtn.style.cursor = 'not-allowed';

    const scoreDiv = document.createElement('div');
    scoreDiv.style.cssText = 'margin-top:14px;padding:14px;background:white;border-radius:8px;border:2px solid #3b82f6;text-align:center;font-size:16px;font-weight:600;color:#1e3a8a;';
    scoreDiv.textContent = 'You scored ' + score + ' out of ' + QUIZ.length;
    if (score === QUIZ.length) {
        scoreDiv.textContent += ' — Perfect score!';
        if (window.Celebration && typeof window.Celebration.celebrate === 'function') {
            window.Celebration.celebrate({ duration: 4000 });
        }
    }
    quizContainer.appendChild(scoreDiv);
    quizScoreText = 'Quiz: ' + score + '/' + QUIZ.length;
}

function hideQuiz() {
    if (quizContainer && quizContainer.parentNode) {
        quizContainer.parentNode.removeChild(quizContainer);
    }
    quizContainer = null;
    quizShown = false;
    quizSubmitted = false;
    quizAnswers = [-1, -1, -1];
    quizScoreText = "";
}
