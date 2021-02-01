const mysql = require('mysql2');
const {
    DB_HOST,
    DB_DATABASE,
    DB_PORT,
    DB_USER,
    DB_PASSWORD
} = require('../app/config')

const pool = mysql.createPool({
    host: DB_HOST,
    database: DB_DATABASE,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD
})

pool.getConnection((err, conn) => {
    conn.connect((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('数据库连接成功')
        }
    })
})

module.exports = pool.promise();