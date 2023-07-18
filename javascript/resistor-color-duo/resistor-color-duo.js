//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colorCode = (colorName) => {
  return COLORS.findIndex(color => color === colorName);
};

const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = (colors) => {
  return Number(`${colorCode(colors[0])}${colorCode(colors[1])}`);
};
