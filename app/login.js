const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'crams',
  password: 'stinky',
  database: 'randomfact',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});




loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }

   
})