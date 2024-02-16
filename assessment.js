//DIAGONAL DIFFERENCE

const calculateAbsoluteDiagonalDifference = (matrix) => {
  if (!matrix || matrix.length !== matrix[0].length) {
    return console.error("Input must be a square matrix");
  }

  const n = matrix.length;

  let rightDiagonalSum = 0;
  let leftDiagonalSum = 0;

  for (i = 0; i < n; i++) {
    rightDiagonalSum += matrix[i][i];
    leftDiagonalSum += matrix[i][n - i - 1];
  }

  return Math.abs(rightDiagonalSum - leftDiagonalSum);
};

const matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
const difference = calculateAbsoluteDiagonalDifference(matrix);
console.log(difference);
