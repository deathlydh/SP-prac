const mysql = require('mysql2');
const dbConnection = mysql.createPool({
 host: 'localhost',
 user: 'root',
 password: '',
 database: '11_toropygin'
});
module.exports = dbConnection.promise();
