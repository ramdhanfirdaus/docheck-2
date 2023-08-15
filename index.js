function secondSpiralQuestion(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let top = 0, bottom = rows - 1, left = 0, right = cols - 1;

    while (top <= bottom && left <= right) {
        for (let i = top; i <= bottom; i++) {
            console.log(matrix[i][left]);
        }
        left++;

        for (let i = left; i <= right; i++) {
            console.log(matrix[bottom][i]);
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            console.log(matrix[i][right]);
        }
        right--;

        for (let i = right ; i >= left; i--) {
            console.log(matrix[top][i]);
        }
        top++;
    }
}

function spiralQuestion(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let top = 0, bottom = rows - 1, left = 0, right = cols - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            console.log(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            console.log(matrix[i][right]);
        }
        right--;

        for (let i = right; i >= left; i--) {
            console.log(matrix[bottom][i]);
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            console.log(matrix[i][left]);
        }
        left++;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter number of cols: ', async colInput => {
    rl.question('Enter number of rows: ', async rowInput => {
        const matrixElement = []
        for (let i = 0; i < parseInt(rowInput); i++) {
            const rowElement = []
            for (let j = 0; j < parseInt(colInput); j++) {
                await new Promise(resolve => {
                    rl.question(`Enter element at [${i}][${j}]: `, elementInput => {
                        rowElement.push(parseInt(elementInput));
                        resolve();
                    });
                });
            }
            matrixElement.push(rowElement)
        }
        spiralQuestion(matrixElement);
        rl.close();
    });
});

// const matrix = [
//     [1, 2, 3, 4, 5, 6, 7],
//     [8, 9, 10, 11, 12, 13, 14],
//     [15, 16, 17, 18, 19, 20, 21],
//     [22, 23, 24, 25, 26, 27, 28],
//     [29, 30, 31, 32, 33, 34, 35],
// ];
// spiralQuestion(matrix);
