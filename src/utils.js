import hash from 'hash.js';


export function getRandomColor(inputString) {
  // Calculate a hash value from the input string using SHA-1 algorithm
  const hashValue = hash.sha1().update(inputString).digest('hex');

  // Extract RGB color components from the hash value
  const r = parseInt(hashValue.slice(0, 2), 16);
  const g = parseInt(hashValue.slice(2, 4), 16);
  const b = parseInt(hashValue.slice(4, 6), 16);

  // Return the RGB color as a string
  return `rgb(${r},${g},${b})`;
}
