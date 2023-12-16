const mysql = require('mysql2');
const mysqlCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aman5804",
    database: "gym",
    port: "3306"
});
module.exports = mysqlCon;