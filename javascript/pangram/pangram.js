//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const obj = {};
  sentence = sentence.toLowerCase();
  for (let letter of sentence)
    if (letter.match(/[a-z]/g))
      obj[letter] = 'okay';

  return Object.keys(obj).length === 26;
};
