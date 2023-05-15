const signupForm = document.getElementByClassName("signup-form");
const signupButton = document.getElementByClassName("signup-form-password");
const signupErrorMsg = document.getElementById("signup-error-msg");

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




signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = signupForm.email.value;
    const password = signupForm.password.value;

    if (username === "email" && password === "web_dev") {
        alert("You have successfully sign up.");
        location.reload();
    } else {
        signupErrorMsg.style.opacity = 1;
    }

   
})