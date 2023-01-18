export function getRandomImage(width = 500, height = 500): string {
  return `https://picsum.photos/${width}/${height}?t=${Date.now()}`;
}
