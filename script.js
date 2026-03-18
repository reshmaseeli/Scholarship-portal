// Explore Scholarships button
function exploreScholarships() {

alert("Opening Scholarships Page...");

window.location.href = "scholarship.html";

}
// Login button (from homepage)
function loginPage() {

window.location.href = "login.html";

}
// Login validation
function validateLogin() {

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(username === "" || password === ""){

alert("Please enter Username and Password");
return false;
}
else{

alert("Login Successful");
return true;

}
}