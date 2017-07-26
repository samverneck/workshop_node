// ES5
function getSql() {
    return
        'SELECT * \n' +
        'FROM table \n' +
        'WHERE id = 1';
}

// ES6
function getSql() {
    return
        `SELECT *
         FROM table
         WHERE id = 1`;
}
