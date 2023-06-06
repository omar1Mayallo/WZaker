export function slugify(str: string): string {
  // I Use My slugify function that i built in my problem solving repo ==> https://github.com/omar1Mayallo/Problem-Solving/blob/main/medium/slugify-function.js
  return str
    .replace(/[^\w\s]|_/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}

export function getCurrentData(): {
  month: number;
  year: number;
} {
  const date = new Date();
  const month = date.getMonth() + 1; // Adding 1 since months are zero-based (0 for January)
  const year = date.getFullYear();
  return {month, year};
}
