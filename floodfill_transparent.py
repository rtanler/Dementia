"""Flood fill white background of an image to make it transparent."""

from PIL import Image
import sys


def floodfill_transparent(input_path, output_path=None, tolerance=30):
    """Replace white background with transparency using flood fill from corners.

    Args:
        input_path: Path to the input image.
        output_path: Path for the output PNG. Defaults to input name + '_transparent.png'.
        tolerance: How close to white (255,255,255) a pixel must be to count as background.
    """
    if output_path is None:
        base = input_path.rsplit('.', 1)[0]
        output_path = f"{base}_transparent.png"

    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size

    def is_white(pixel):
        r, g, b = pixel[0], pixel[1], pixel[2]
        return (255 - r) <= tolerance and (255 - g) <= tolerance and (255 - b) <= tolerance

    visited = set()

    # Flood fill from all four corners
    stack = [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]

    while stack:
        x, y = stack.pop()
        if (x, y) in visited:
            continue
        if x < 0 or x >= width or y < 0 or y >= height:
            continue
        if not is_white(pixels[x, y]):
            continue

        visited.add((x, y))
        pixels[x, y] = (255, 255, 255, 0)  # Make transparent

        stack.append((x + 1, y))
        stack.append((x - 1, y))
        stack.append((x, y + 1))
        stack.append((x, y - 1))

    img.save(output_path, "PNG")
    print(f"Saved transparent image to: {output_path}")
    print(f"  Pixels made transparent: {len(visited)}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python floodfill_transparent.py <input_image> [output_image] [tolerance]")
        print("  tolerance: 0-255, how close to white a pixel must be (default: 30)")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None
    tol = int(sys.argv[3]) if len(sys.argv) > 3 else 30

    floodfill_transparent(input_file, output_file, tol)
