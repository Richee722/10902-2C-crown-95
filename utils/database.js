const mysql = require('mysql2');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'0000',
    database:'crown_95'
  })
  module.exports = pool.promise();