
/**
 * Soma todos os elementos de um array.
 */
module.exports.sum = function (array) {
    return array.reduce((sum, value) => {
        return sum + value;
    });
}

/**
 * Retorna um string com os elementos do array separados por ,.
 */
module.exports.join = function (array) {
    return array.join(', ');
}
