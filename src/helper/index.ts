export function slugify(text: string): string {
  /* What the form i need to reach ?
  "    Prayer   Timer    "
  Sol:
  1- Trim white spaces from first and last >> "Prayer   Timer"
  2- Remove or collapse white spaces between words  >> "Prayer Timer"
  3- Remove white spaces between words and replace by "-" >> "Prayer-Timer"
  4- Convert Text To Lowercase >> "prayer-timer"
  */
  // Trim white spaces from first and last
  text = text.trim();

  // Make the string lowercase
  text = text.toLowerCase();

  text = text
    // Remove invalid chars
    .replace(/[^a-z0-9 -]/g, "")
    // Collapse whitespace and replace by -
    .replace(/\s+/g, "-")
    // Collapse dashes
    .replace(/-+/g, "-");

  return text;
}
