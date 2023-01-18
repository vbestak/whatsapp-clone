export function getModifierClass(
  mainClass: string,
  modifiers: string[]
): string {
  return modifiers.map((modifier) => `${mainClass}--${modifier}`).join(" ");
}
