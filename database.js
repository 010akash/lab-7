const express = require("express");
const { append } = require('express/lib/response');
const path = require("path");
const hbs = require("hbs");
var mysql = require('mysql');
const bodyParser = require('body-parser');
const { send } = require("process");
var router = express.Router();
let http = require('http');
const app = express();
var fs = require('fs');
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
const template_path = path.join(__dirname, "../templates/views");
app.use(bodyParser.urlencoded({ entended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});


var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'onlinedatacollection'
});
app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
conn.connect(function (err) {
  if (err)
    throw err;
  console.log('connected');
 
});



app.get("/login.html", function (req, res) {
  res.sendFile("login.html", { root: __dirname });
});
app.get("/register.html", function (req, res) {
  res.sendFile("register.html", { root: __dirname });
});

app.post("/login", async (req, res) => {

  password = req.body.password;
  email = req.body.email;

  conn.query("select Email,Password from ragistration", function (error, result, fields) {

    if (error) {
      console.log('error in query');
    }
    else {

      Object.keys(result).forEach(function (key) {

        var user = result[key];
        if (user.Email == email && user.Password == password) {
          console.log('login successfully');
          res.sendFile(__dirname + "/index.html");
        }
      })

    }


  });
});

app.post("/register", async (req, res) => {

  cpsw = req.body.conPassword;
  psw = req.body.password;
  email = req.body.email;
  dob = req.body.dob;
  fullname = req.body.fullname;

  if (psw == cpsw) {
    var sql = "insert into ragistration values('" + fullname + "','" + email + "','" + dob + "','" + psw + "')";
    conn.query(sql, (err, rows, fields) => {

      if (!err)
        res.send("User successfully added");
      else
        console.log(err);
    });


  }
  else {
    res.send("Password Not MAtched");
  }

});

