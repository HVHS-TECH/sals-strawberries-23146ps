
console.log("Running Sal's Strawberries")

const HTML_LOGIN = document.getElementById("loginButton");

const HTML_NAME = document.getElementById("name");
const HTML_FRUIT = document.getElementById("favouriteFruit");
const HTML_AMOUNT = document.getElementById("fruitQuantity");

function fb_authenticate(){
    fb_login();
}

function showLoggedIn(){
    let userName = GLOBAL_user.displayName
    HTML_LOGIN.innerHTML = "<h3> Logged in as "+ userName +" </h3>"
    firebase.database().ref('/salsstrawberries/users/').update(
        [GLOBAL_user.uid]: {}
    )
}

function writeForm() {
    fb_login();
    // Get the form data
    const HTML_NAME = document.getElementById("name");
    let formName = HTML_NAME.value; 
    const HTML_FRUIT = document.getElementById("favouriteFruit");
    let formFruit = HTML_FRUIT.value;
    const HTML_AMOUNT = document.getElementById("fruitQuantity");
    let formAmount = HTML_AMOUNT.value; 

}