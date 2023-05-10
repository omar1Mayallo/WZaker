export function slugify(text: string): string {
  /* What the form i need to reach ?
  "    Prayer   Timer    "
  Sol:
  1- Trim white spaces from first and last >> "Prayer   Timer"
  2- Remove or collapse white spaces between words  >> "Prayer Timer"
  3- Remove white spaces between words and replace by "-" >> "Prayer-Timer"
  4- Convert Text To Lowercase >> "prayer-timer"
  */
  // 1) Trim white spaces from first and last & 2) Remove or collapse white spaces between words
  // https://stackoverflow.com/questions/18065807/regular-expression-for-removing-whitespaces
  text = text.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
  // 3) Remove white spaces between words and replace by "-"
  text = text.replace(" ", "-");
  // 4) Convert Text To Lowercase
  text = text.toLowerCase();

  // console.log(text);

  return text;
}
