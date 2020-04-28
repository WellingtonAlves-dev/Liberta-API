const db = require("../database/db");
const verify = require("../middleware/verify");
module.exports = app => {
    app.get("/users",(req, res) => {
        db("SELECT * FROM users", res);
    })
    app.get("/user/:id", (req, res) => {
        const query = `SELECT users.email, users.nick, users.avatar, users.bio FROM users WHERE users.id = ${req.params.id}`
        db(query, res);
    })
}