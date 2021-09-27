import fs from 'fs';
export function saveNumbers(numbersArray: number[]) {
  const data = JSON.stringify(numbersArray);
  fs.writeFileSync('./public/numbers.json', data);
}
