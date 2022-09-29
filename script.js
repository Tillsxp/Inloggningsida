let knapp = document.createElement("button"); // Skapar en knapp
let userInput = document.getElementById("userInput");
let passInput = document.getElementById("passInput");
let loginKnapp = document.getElementById("click");

document.getElementById("main").style.display= "none";

if (localStorage.getItem("namn") == "Sara") { // Kollar om användaren är inloggad sen tidigare
document.getElementById("main").style.display = "block";
document.getElementById("login").style.display="none";
logoutKnapp();
}


// if(knapp){ console.log("knapp finns")

//}else {logou}
 
    function logoutKnapp () {  // Skapar en logga ut knapp
        let mainDiv = document.getElementById("main");
        let para = document.createElement("p");
        let node = document.createTextNode("Regler");
        para.appendChild(node);
        let knappText = document.createTextNode("Logga ut");
        knapp.appendChild(knappText);
        document.body.appendChild(knapp,para);
    } 
    
    knapp.addEventListener("click", function (){ // Loggar ut när knappen trycks
        
        document.getElementById("login").style.display="block";
        localStorage.clear();
        knapp.remove ();
    })


loginKnapp.addEventListener("click", function() { // Vid login lägger in användarinfo och skickar användaren till huvudhemsidan.
    if (userInput.value === "Sara" && passInput.value === "qwe123"){
        localStorage.setItem("namn","Sara");
        localStorage.setItem("lösenord","qwe123");
        document.getElementById("main").style.display ="block";
        document.getElementById("login").style.display = "none";
        alert("Välkommen,du är nu inloggad.");
        if(knapp = false)  {
        logoutKnapp();
        knappExist = true;
        }
    } else {
        alert("Användarnamnet eller lösenordet är inkorrekt.");
    }
})