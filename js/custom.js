// // navbar menu 
// var menuItem = document.getElementById("menuItems");

// menuItem.style.maxHeight = "0px";

// function menutoggle() {
//     if (menuItem.style.maxHeight == "0px") {
//         menuItem.style.maxHeight = "200px";
//     } else {
//         menuItem.style.maxHeight = "0px";
//     }
// }

// details product gallery
var bigimg = document.getElementById("ProductImg");
var smallimg = document.getElementsByClassName("smallimg");

smallimg[0].onclick = function() {
    bigimg.src = smallimg[0].src;
}
smallimg[1].onclick = function() {
    bigimg.src = smallimg[1].src;
}
smallimg[2].onclick = function() {
    bigimg.src = smallimg[2].src;
}
smallimg[3].onclick = function() {
    bigimg.src = smallimg[3].src;
}



function remove() {
    document.getElementById("removeItem").innerHTML = "";
}
// js for login form

var indicator = document.getElementById("indicator");
var loginForm = document.getElementById("loginForm");
var regiform = document.getElementById("regiform");

function register() {
    var indicator = document.getElementById("indicator");
    var loginForm = document.getElementById("loginForm");
    var regiform = document.getElementById("regiform");
    regiform.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}

function login() {
    var indicator = document.getElementById("indicator");
    var loginForm = document.getElementById("loginForm");
    var regiform = document.getElementById("regiform");
    regiform.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0)";
}