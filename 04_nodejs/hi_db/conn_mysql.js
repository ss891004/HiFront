var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'mysql'
});
 
//连接数据库
connection.connect();

console.log(connection)
 
connection.query('SELECT  1+ 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});


//数据库操作CURD
sql = "select host, user from user";

connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');  
});
 

connection.end();

//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
//FLUSH PRIVILEGES