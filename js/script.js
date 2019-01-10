/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var q1score = favAnimal(q1Result); 
        var q2score = sneakerChoice(q2Result);
        var q3score = favSystem(q3Result);
        var q4score = favSport(q4Result);
        var totalScore = (q1score+q2score+q3score+q4score);
        var teamPlacement = team(totalScore,name);
        $(".result").text(teamPlacement);
    });

});
function favAnimal(animalChoice){
    if(animalChoice==="Lion"){
        return 7;
    }else if(animalChoice==="Tiger"){
        return 5;
    }else if(animalChoice==="Bear"){
        return 3;
    }else if(animalChoice==="Dog"){
        return 4;
    }else {
        return 0;
    }
    
}
function sneakerChoice(sneakerChoice){
    if(sneakerChoice==="High tops"){
        return 5;
    }else if(sneakerChoice==="Low tops"){
        return 4;
    }else {
        return 0;
    }
}
function favSystem(systemChoice){
    if(systemChoice==="Xbox One"){
        return 7;
    }else if(systemChoice==="PS4"){
        return 2;
    }else{ 
        return 0;
    }
}
function favSport(sportChoice){
    if(sportChoice==="Football"){
        return 6;
    } else if(sportChoice==="Basketball"){
        return 5;
    }else if(sportChoice==="Baseball"){
        return 4;
    }else if(sportChoice==="Soccer"){
        return 3
    }else{
        return 0;
    }
}
function team(teamResult,name){
    if(teamResult<9){
        return "Congrats " + name + " you were drafted to New York Extreme!";
    }else if(teamResult<18){
        return "Congrats " + name + " you were drafted to Houston Heat!";
    }else if(teamResult<25){
        return "Congrats " + name + " you were drafted to San Diego Dynasty!";
    }else{
        return "Answer the questions.";
    }
}