const mysql = require('mysql')

const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'formportofolio',
    multipleStatements: true
})

koneksi.connect((err) => {
    if (err) throw err
    console.log('MySQL Connected...')
})

module.exports = koneksi