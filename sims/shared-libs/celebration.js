/**
 * Celebration animations for Dementia textbook MicroSims
 *
 * A small, framework-agnostic library that draws particle celebrations
 * (confetti, stars, sparkles) on a fullscreen canvas overlay. Works in
 * vanilla JS sims, p5.js sims, and SVG-based sims because it operates on
 * a separate transparent canvas it appends to <body>.
 *
 * Usage:
 *
 *   // Trigger when the student completes a quiz
 *   Celebration.fire({ type: 'confetti', duration: 2500 });
 *   Celebration.fire({ type: 'stars',    duration: 2500 });
 *   Celebration.fire({ type: 'fireworks', duration: 3500 });
 *
 *   // Default celebration combines all three:
 *   Celebration.celebrate();
 *
 * Include via:
 *   <script src="../shared-libs/celebration.js"></script>
 */
(function (global) {
  'use strict';

  const COLORS = [
    '#FF6B6B', // red
    '#FF8E53', // orange
    '#FFD93D', // yellow
    '#6BCB77', // green
    '#4D96FF', // blue
    '#9B59B6', // purple
    '#FF6B9D'  // pink
  ];

  let canvas = null;
  let ctx = null;
  let particles = [];
  let rafId = null;
  let lastTime = 0;
  let stopAt = 0;

  function ensureCanvas() {
    if (canvas) return;
    canvas = document.createElement('canvas');
    canvas.id = 'celebration-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
  }

  function resize() {
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function pickColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  function makeConfetti(count) {
    const W = window.innerWidth;
    const out = [];
    for (let i = 0; i < count; i++) {
      out.push({
        kind: 'confetti',
        x: rand(0, W),
        y: rand(-60, -10),
        vx: rand(-1.5, 1.5),
        vy: rand(2.5, 5.5),
        gravity: 0.08,
        size: rand(6, 12),
        rotation: rand(0, Math.PI * 2),
        rotationSpeed: rand(-0.2, 0.2),
        color: pickColor(),
        alpha: 1,
        fade: rand(0.003, 0.008)
      });
    }
    return out;
  }

  function makeStars(count, originX, originY) {
    const out = [];
    for (let i = 0; i < count; i++) {
      const angle = rand(-Math.PI * 0.85, -Math.PI * 0.15);
      const speed = rand(4, 9);
      out.push({
        kind: 'star',
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 0.18,
        size: rand(10, 20),
        rotation: rand(0, Math.PI * 2),
        rotationSpeed: rand(-0.15, 0.15),
        color: pickColor(),
        alpha: 1,
        fade: rand(0.005, 0.01)
      });
    }
    return out;
  }

  function makeFireworkBurst(count, originX, originY) {
    const out = [];
    const burstColor = pickColor();
    for (let i = 0; i < count; i++) {
      const angle = rand(0, Math.PI * 2);
      const speed = rand(2, 6);
      out.push({
        kind: 'spark',
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: 0.04,
        size: rand(2, 4),
        color: burstColor,
        alpha: 1,
        fade: rand(0.012, 0.02)
      });
    }
    return out;
  }

  function drawStar(cx, cy, r, points) {
    const step = Math.PI / points;
    ctx.beginPath();
    for (let i = 0; i < 2 * points; i++) {
      const radius = i % 2 === 0 ? r : r * 0.45;
      const a = i * step - Math.PI / 2;
      const x = cx + Math.cos(a) * radius;
      const y = cy + Math.sin(a) * radius;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
  }

  function step(now) {
    if (!ctx) return;
    if (!lastTime) lastTime = now;
    lastTime = now;

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.fade;
      if (p.rotationSpeed) p.rotation += p.rotationSpeed;

      if (p.alpha <= 0 || p.y > window.innerHeight + 60) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;

      if (p.kind === 'confetti') {
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else if (p.kind === 'star') {
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        drawStar(0, 0, p.size, 5);
      } else if (p.kind === 'spark') {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    if (now < stopAt || particles.length > 0) {
      rafId = requestAnimationFrame(step);
    } else {
      cancelAnimationFrame(rafId);
      rafId = null;
      lastTime = 0;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

  function start() {
    if (rafId) return;
    lastTime = 0;
    rafId = requestAnimationFrame(step);
  }

  /**
   * Fire a single celebration effect.
   * @param {Object} opts
   * @param {string} opts.type      'confetti' | 'stars' | 'fireworks'
   * @param {number} opts.count     particle count (default depends on type)
   * @param {number} opts.duration  total ms the animation runs (default 2500)
   */
  function fire(opts) {
    opts = opts || {};
    ensureCanvas();
    const type = opts.type || 'confetti';
    const duration = opts.duration || 2500;
    const W = window.innerWidth;
    const H = window.innerHeight;

    if (type === 'confetti') {
      particles = particles.concat(makeConfetti(opts.count || 120));
    } else if (type === 'stars') {
      particles = particles.concat(
        makeStars(opts.count || 40, W / 2, H * 0.7)
      );
    } else if (type === 'fireworks') {
      const bursts = opts.count || 5;
      for (let i = 0; i < bursts; i++) {
        setTimeout(function () {
          ensureCanvas();
          particles = particles.concat(
            makeFireworkBurst(40, rand(W * 0.2, W * 0.8), rand(H * 0.2, H * 0.6))
          );
          if (!rafId) start();
        }, i * 350);
      }
    }

    stopAt = performance.now() + duration;
    start();
  }

  /**
   * Combined celebration: confetti + stars + fireworks together.
   * Use this for quiz completion / "you finished!" moments.
   */
  function celebrate(opts) {
    opts = opts || {};
    const duration = opts.duration || 3500;
    fire({ type: 'confetti', count: 150, duration: duration });
    fire({ type: 'stars',    count: 50,  duration: duration });
    fire({ type: 'fireworks', count: 6,  duration: duration });
  }

  /**
   * Stop any running celebration immediately and clear the canvas.
   */
  function clear() {
    particles = [];
    stopAt = 0;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    if (ctx) ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }

  global.Celebration = {
    fire: fire,
    celebrate: celebrate,
    clear: clear
  };
})(window);
