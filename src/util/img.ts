export function getRandomImage(width = 500, height = 500, id = 1): string {
  return `https://picsum.photos/${width}/${height}?t=${Date.now()}${id}`;
}
