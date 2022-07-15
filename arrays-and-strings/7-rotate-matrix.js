/**
 * Solved on - Leetcode, Leetcode problem no - 48
 * 
 * Problem - Given an image represented by NxN matrix, where each pixel in the image is 4 bytes, write a method
 * to rotate the image by 90 degrees. Can you do this in place?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    const matrixSize = matrix.length;
    const matrixDepth = Math.floor(matrixSize/2); 
    for (let i=0; i<matrixDepth; i++) {
        rotateMatrix(i, matrixSize, matrix);
    }
};

const rotateMatrix = (matDepth, matSize, mat) => {
    let counter = 0;
    let limit = (matSize - matDepth) - 1;
    for(let i=matDepth; i<limit; i++) {
        let temp = mat[matDepth][i];
        
        // Q1
        let temp2 = mat[i][limit];
        mat[i][limit] = temp;
    
        // Q2
        temp = temp2;
        temp2 = mat[limit][limit-counter];
        mat[limit][limit-counter] = temp;
        
        // Q3
        temp = temp2;
        temp2 = mat[limit-counter][matDepth];
        mat[limit-counter][matDepth] = temp;
        
        // Q4
        temp = temp2;
        mat[matDepth][i] = temp;
        
        counter += 1;
    }
    
} 