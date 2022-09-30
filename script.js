let knapp = document.createElement("button"); // Skapar en knapp.
let knappText = document.createTextNode("Logga ut");

let userInput = document.getElementById("userInput");
let passInput = document.getElementById("passInput");
let loginKnapp = document.getElementById("click");


if (localStorage.getItem("namn") == "Sara") { // Kollar om användaren är inloggad sen tidigare.

document.getElementById("login").style.display="none";
logoutKnapp();
}
 
    function logoutKnapp () {  // Skapar en logga ut knapp.

        knapp.appendChild(knappText);
        document.body.appendChild(knapp);
    } 
    
    knapp.addEventListener("click", function (){ // Loggar ut när knappen trycks.

        document.getElementById("login").style.display="flex";
        localStorage.clear();
        knapp.remove ();
    })


loginKnapp.addEventListener("click", function() { // Vid login lägger in användarinfo och skickar användaren till huvudhemsidan.

    if (userInput.value === "Sara" && passInput.value === "qwe123"){

        localStorage.setItem("namn","Sara");
        localStorage.setItem("lösenord","qwe123");
        document.getElementById("login").style.display = "none";
        alert("Välkommen,du är nu inloggad.");
        logoutKnapp();
    } else { // Om användarinfo är fel visas ett meddelande.
        
        alert("Användarnamnet eller lösenordet är inkorrekt.");
    }
})