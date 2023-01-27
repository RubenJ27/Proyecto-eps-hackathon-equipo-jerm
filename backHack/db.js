const mysql = require('mysql');

const {database} = require('./keys');

const mysqli = mysql.createPool(database);
mysqli.getConnection((err, connection) => {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.');
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has to many connections');
      }
      if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused');
      }
    }
  
    if (connection){
      connection.release();
      console.log('DB is Connected');
    } 
  
    return;
  });
  
 




// mysqli.connect(function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('db is conected');
//     }
// });

module.exports = mysqli;