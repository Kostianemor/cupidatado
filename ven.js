const colorMatrix = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
];

const fifthColumn = [0.5, 0.5, 0.5, 0.5];

// Add the fifth column to the colorMatrix
for (let i = 0; i < colorMatrix.length; i++) {
  colorMatrix[i].push(fifthColumn[i]);
}

console.log(colorMatrix);
