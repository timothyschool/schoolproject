$(document).ready(function() {

    var images = [
        "img/Nosmash.png",
        "img/Smash1.png",
        "img/Smash2.png",
        "img/Smash3.png",
        "img/Smash4.png",
        "img/Smash5.png",
        "img/Smash6.png",
        "img/Smash7.png",
        "img/Gameover.png"
    ];



    var imageIndex = 0;
    /*
        $("#previous").on("click", function() {
            //  console.log("hello");
            imageIndex = (imageIndex + images.length - 1) % (images.length);
            $("#image").attr('src', images[imageIndex]);
        });

        $("#next").on("click", function() {
            imageIndex = (imageIndex + 1) % (images.length);
            $("#image").attr('src', images[imageIndex]);
        });
    */
    $("#image").on("click", function() {
        imageIndex = (imageIndex + 1) % (images.length);
        $("#image").attr('src', images[imageIndex]);
        /* document.getElementById("image").className += "shake";*/

    });
    $("#image").attr(images[0]);



});
var button = document.getElementById("image"),
    count = 0;
button.onclick = function() {
    count += 1;

    if (count == 9) {
        window.location.href = "test.html";
    }
};