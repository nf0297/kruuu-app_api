const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alan-creative'
})
connection.connect()
module.exports = connection
