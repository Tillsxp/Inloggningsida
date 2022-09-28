
let userInput = document.getElementById("userInput");
let passInput = document.getElementById("passInput");

document.querySelector('.validation').addEventListener("click",userDataValid);
document.getElementById("main").style.display= "none";

if (localStorage.getItem("namn") == "Sara") {
document.getElementById("main").style.display = "block";
document.getElementById("login").style.display="none";
}
function logOut() { // Skickar användaren till Login igen
    document.getElementById("main").style.display ="none";
    document.getElementById("login").style.display="block";
    localStorage.clear();
}

function userDataValid () {
    if (userInput.value === "Sara" && passInput.value === "qwe123"){
        localStorage.setItem("namn","Sara");
        localStorage.setItem("lösenord","qwe123");
        document.getElementById("main").style.display ="block";
        document.getElementById("login").style.display = "none";
    } else {
        alert("Användarnamnet eller lösenordet är inkorrekt.");
    }
}