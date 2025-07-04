/**
 * Ajusta o brilho de uma cor hexadecimal.
 *
 * Se a cor for escura, ela será clareada.
 * Se for clara, ela será escurecida.
 *
 * @param hex A cor hexadecimal (ex: "#AABBCC")
 * @param amount Intensidade de ajuste de brilho (padrão: 100)
 * @returns Uma nova cor hexadecimal ajustada
 */
export function autoAdjustColorBrightness(
  hex: string,
  amount: number = 100
): string {
  hex = hex.replace(/^#/, "");

  const num = parseInt(hex, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

  const adjust = brightness < 128 ? amount : -amount;

  r = Math.min(255, Math.max(0, r + adjust));
  g = Math.min(255, Math.max(0, g + adjust));
  b = Math.min(255, Math.max(0, b + adjust));

  return (
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}
