const db = require("../database/db");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // error first callback
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // error first callback
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = (app) => {
  app.get("/posts", (req, res) => {
    db(
      "SELECT *, post.id as ID_POST FROM `post` inner join users on users.id = post.id_user order by post.id desc",
      res
    );
    console.log("aqui2");
  });

  app.get("/post/:id", (req, res) => {
    db(
      "SELECT *, post.id as ID_POST FROM `post` inner join users on users.id = post.id_user where post.id = " +
        req.params.id,
      res
    );
  });

  app.get("/posts/:id_user", (req, res) => {
    db(
      `SELECT * FROM post WHERE id_user = ${req.params.id_user}`,
      res
    )
  })

  app.post("/posts", upload.single("photo"), (req, res) => {
    let query = `insert into post(id_user, foto) values (${req.body.id_user}, '${req.file.filename}')`;
    db(query, res);
    console.log(req.body);
  });
};
