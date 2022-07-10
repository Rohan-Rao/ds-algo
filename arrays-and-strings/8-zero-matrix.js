/**
 * Solve on - Leetcode, Problem no - 73
 *
 * Problem - Write an algorithm such that if an element in MxN matrix is 0,
 * its entire row and column is set to 0.
 * /

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    
    const rowsWithZero = [];
    const colsWithZero = [];
    for(let i=0; i< row; i++) {
        for(let j=0; j<col; j++) {
            if(matrix[i][j] === 0) {
                rowsWithZero.push(i);
                colsWithZero.push(j);
            }
        }
    }
    
    for(let i=0; i<rowsWithZero.length; i++) {
        
        const row = rowsWithZero[i];
        for(let j=0; j<col; j++) {
            matrix[row][j] = 0;
        }
    }
    for(let i=0; i<colsWithZero.length; i++) {
        const col = colsWithZero[i];
        for(let j=0; j<row; j++) {
            matrix[j][col] = 0;
        }
    }
    
    return matrix;
};