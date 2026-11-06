/** Owner titles with *starred* words, as plain text — for links, labels and the sheet title. */
export function plainText(text: string): string {
  return text.replace(/\*([^*\n]+)\*/g, '$1');
}
