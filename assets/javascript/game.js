$(document).ready(function () {

    // HTML Text Variables

    var wins = 0;
    var losses = 0;
    var computerNumber = (Math.floor(Math.random() * 120) + 19);
    

    //  Click button to show crystals
    $('#show-crystals').bind('click', function () {
        $(".crystal-images").toggle();
        
        // console log number to match
        console.log(computerNumber);

        // show the number to match on HTML
        $("#numberguess-text").append("Number to match: " + computerNumber);
        
    });
});