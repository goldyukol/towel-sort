module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    const res = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let index = i % 2 === 0 ? j : matrix[i].length - 1 - j;

            res.push(matrix[i][index]);
        }
    }

    return res;
};
