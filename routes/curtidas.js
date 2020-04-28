const db = require("../database/db");

module.exports = (app) => {
  app.get("/curtidas",(req, res) => {
    db("select * from Curtidas", res);
    console.log("aqui!");
  });
  app.post("/curtidas",  (req, res) => {
      const id_post = req.body.id_post;
      const id_user = req.body.id_user;
      db(`insert into Curtidas(id_post, id_user) VALUES (${id_post}, ${id_user})`,
      res)
  })
  app.delete("/curtidas/:post/:user", (req, res) => {
      const id_post = req.params.post;
      const id_user = req.params.user;
      db(`delete from Curtidas WHERE id_post = ${id_post} and id_user = ${id_user}`, res)
  })
};
