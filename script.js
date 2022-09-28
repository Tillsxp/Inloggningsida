
let userInput = document.getElementById("userInput");
let passInput = document.getElementById("passInput");

const username = localStorage.getItem("username");
const password = localStorage.getItem("password");


document.getElementById("main").style.display = "none";


document.querySelector('.checker').addEventListener("click",userDataValid);


if (username == "user")
document.getElementById("main").style.display = "block";


if (userDataValid) {
    const button = document.createElement("button");
    button.innerHTML= "Logga ut";
    main.appendChild(button);
}

function userDataValid () {
    localStorage.setItem('username', 'user');
    localStorage.setItem('password', '123');

    if (userInput.value === username && passInput.value === password){
        document.getElementById("main").style.display ="block";
        
    } else {
        alert("Användarnamnet eller lösenordet är inkorrekt.");
    }
}