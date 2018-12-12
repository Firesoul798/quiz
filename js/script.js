/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});
function question1(answer1){
    if(answer1==="Lion"){
        return 7;
    }else if(answer1==="Tiger"){
        return 5;
    }else if(answer1==="Bear"){
        return 3;
    }else if(answer1==="Dog"){
        return 4;
    }else {
        return 0;
    }
    
}
function question2(answer2){
    
}