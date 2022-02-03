// Red
var array = [9, 7, 3, 9];

function getDiagonal(array) {
    // Blue
    var matrix = [];
    var root = Math.sqrt(array.length);
    if (!Number.isInteger(root)) {
        // Orange
        return false
    }

    var diagonal1 = 0;
    var diagonal2 = 0;

    function createMatrix () {
        // Gray
        for (let i = 0; i < array.length; i += root) {
            // Green
            let num = array.slice(i, i + root);
            matrix.push(num);
        }
    }

    function sumDiagonals () {
        // Black
        for (let i = 0; i < root; i++) {
            // Yellow
            for (let j = 0; j < root; j++) {
                // Brown
                if (i == j) {
                    // Pink
                    diagonal1 += matrix[i][j];
                }
                if (i + j == root - 1) {
                    // Purple
                    diagonal2 += matrix[i][j];
                }
            }
        }
    }

    createMatrix();
    sumDiagonals();

    return Math.abs(diagonal1 - diagonal2);
}

console.log(getDiagonal(array));