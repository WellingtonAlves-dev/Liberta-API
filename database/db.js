const mysql = require("mysql");

function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3306,
      user     : 'liberta_api_db',
      password : 'Admin140403',
      database : 'liberta'
    });
  
    connection.query(sqlQry, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        // console.log('executou!');
    });
  }

module.exports = execSQLQuery;