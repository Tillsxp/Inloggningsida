let knapp = document.createElement("button"); 
let knappText = document.createTextNode("Logga ut");

let userInput = document.getElementById("userInput");
let passInput = document.getElementById("passInput");
let loginKnapp = document.getElementById("click");


if (localStorage.getItem("namn") == "Sara") { 

document.getElementById("login").style.display="none";
logoutKnapp();
}
 
    function logoutKnapp () {  

        knapp.appendChild(knappText);
        document.body.appendChild(knapp);
    } 
    
    knapp.addEventListener("click", function (){

        document.getElementById("login").style.display="flex";
        localStorage.clear();
        knapp.remove ();
    })


loginKnapp.addEventListener("click", function() { 

    if (userInput.value === "Sara" && passInput.value === "qwe123"){

        localStorage.setItem("namn","Sara");
        localStorage.setItem("lösenord","qwe123");
        document.getElementById("login").style.display = "none";
        alert("Välkommen,du är nu inloggad.");
        logoutKnapp();
    } else {
        
        alert("Användarnamnet eller lösenordet är inkorrekt.");
    }
})