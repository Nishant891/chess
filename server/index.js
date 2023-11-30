const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.json());

app.use(session({
  key: "userId",
  secret: "W@kj163",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24,
  }
}));

const port = 8000;

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "chess",
});

app.post("/signup", (req, res) => {
  
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, saltRounds, (err,hash) => {
    db.query(
      "INSERT INTO users (username, email, password) VALUES (?,?,?)",
      [username, email, hash],
      (err, result) => {
        if(err){
          res.send(err);
        }else{
          req.session.user = req.body;
          req.session.save();
          res.send("User Signed In");
        }
      }
    );
  })
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT* FROM users WHERE email = ?",
    [email],
    (err, result) => {
        if(err){
          res.send(err);
        }
        if(result.length > 0){
            bcrypt.compare(password, result[0].password, (err, response) => {
              if(response){
                console.log(result);
                req.session.user = result;
                req.session.save();
                res.send("User Logged In");
              }else{
                res.send("Wrong email/password combination");
              } 
            })
        }
        else{
            res.send({message: "No user"})
        }
    }
  );
});

app.post("/remove", (req, res) => {
  if(req.session.user){
    req.session.destroy()
    res.send("User Logged Out");
  }
});

app.get("/", (req, res) => {
  console.log(req.session.user);
  if(req.session.user){
    res.send({loggedIn: true, user: req.session.user});
  }
  else{
    res.send({loggedIn: false});
  }
});

app.listen(port, () => console.log(`Server online on ${port}`));
