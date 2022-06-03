var button1 = document.getElementById("gears1")
var button2 = document.getElementById("gears2")

button1.onclick = function() {
    window.location.href = "tim.html";
    console.log("hoi tim")
};

button2.onclick = function() {
    console.log("hoi tim")
    window.location.href = "noel.html";
};