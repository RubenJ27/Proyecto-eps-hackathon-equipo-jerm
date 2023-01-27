const express = require("express");
const router = express.Router();
const mysqli = require("../db");

router.post("/eps", (req, res) => {
  const data = req.body;
  res.send(data);
  // let sql = "INSERT INTO eps set ?";
  // mysqli.query(sql, data, (err, rows) => {
  //   if (!err) {
  //     res.json({ status: 200, mensaje: "ok", id: rows.insertId });
  //   } else {
  //     res.json({ status: 500, mensaje: `ERROR AL REGISTRAR CLIENTE ${err}` });
  //   }
  // });
});
router.get("/eps/:id", (req, res) => {
  const { id } = req.params;
  let query = "";
  if (id === "1") {
    query =
      "SELECT * FROM `eps` WHERE resultado <= 2   ORDER BY resultado ASC LIMIT 0,20;";
  } else if (id === "2") {
    query =
      "SELECT * FROM `eps` WHERE resultado >= 3 and resultado < 5  ORDER BY resultado ASC LIMIT 0,20;";
  } else if (id === "3") {
    query =
      "SELECT * FROM `eps` WHERE resultado >= 5 ORDER BY resultado ASC LIMIT 0,20;";
  }
  mysqli.query(query, (err, row) => {
    if (!err) {
      res.json(row);
    } else {
      res.json({ status: 500, mensaje: err });
    }
  });
});
router.get("/eps", (req, res) => {
  mysqli.query("SELECT * FROM `eps`", (err, row) => {
    if (!err) {
      res.json(row);
    } else {
      res.json({ status: 500, mensaje: err });
    }
  });
});

module.exports = router;
