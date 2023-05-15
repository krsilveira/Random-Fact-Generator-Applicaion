const loginForm = document.getElementByClassName("login-form");
const loginButton = document.getElementByClassName("login-form-password");
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

$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.email.value;
    const password = loginForm.password.value;

    if (username === "email" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});