const mysql = require("mysql");
const jwt = require("jsonwebtoken");

const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'liberta_api_db',
    password : 'Admin140403',
    database : 'liberta'
  });

module.exports = app => {
    app.post("/login", (req, res) => {
        const query = `SELECT * FROM users WHERE email = '${req.body.email}' and senha = '${req.body.senha}'`;
        connection.query(query, (err, results) => {
            if(err) console.log(err);
            
            if(results && results.length > 0) {
                const id = results[0].id;
                let token = jwt.sign({id}, 'admin')
                res.status(200).json({auth: true, token: token, id: id});

            }
            else {
                res.status(200).json({auth: false, token: null, id: null});
            }
        })
    })
}