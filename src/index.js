// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = []
    if (matrix === undefined) {
        return []
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 == 1) {
                matrix[i] = matrix[i].sort(function (a, b) {
                    return b - a
                })
            }
            for (let j = 0; j < matrix[i].length; j++) {
                result.push(matrix[i][j])
            }
        }
        return result
    }
}
