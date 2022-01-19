const transpose = function(matrix) {
let result = [];
    for (let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[i].length; j++){
        if (result[j] === undefined) {
            result[j] = [];
        }
        result[j][i] = matrix[i][j];
      }
    }
    return result;
};

const checkHorizontal = (matrix, word) => {
    const horizontalJoin = matrix.map(ls => ls.join(''));
   
    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
};

const wordSearch = (letters, word) => { 
   if (checkHorizontal(letters, word) || checkHorizontal(transpose(letters), word) && letters.length > 0) {
       return true;
   } 
   return false;
};

module.exports = wordSearch

