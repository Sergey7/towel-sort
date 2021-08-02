
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === [] || !matrix) {
      return [];
  }
  let rez = [];
  let numStr = 0;
  for (let i = 0; i < matrix.length; i++) {
    if (numStr === 0) {
      for (let j = 0; j < matrix[i].length; j++){
        rez.push(matrix[i][j])
      }
      numStr = 1;
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--){
        rez.push(matrix[i][j])
      }
      numStr = 0;
    }
  }

  return rez;
}
