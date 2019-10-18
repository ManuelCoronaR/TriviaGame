// Global variables
var time = 20;
var questions =[
{
    q1: ["What does the HTML stand for?"],
    answers1: [{
        a: "b",
        c: "d",
        e: "f",
        g: "h",
    }],
    answer: "d" //Actual answer
},
{
    q1: ["What does the HTML stand for?"],
    answers2: [{
        a: "b",
        c: "d",
        e: "f",
        g: "h"
    }],
}
]
var correctAnswers;
var wrongAnswers;
var intervalId;
// Functions
// =================================
// Test
console.log(questions.q1);
$("#start").on("click", function () {

})
function gamePlay() {
    $(".startBtn").on("click", function () {

        // remove all button with the class startBtn
        $("button").remove(".startBtn");
        quest1;
    });
} 
    function quest1() {
        // Testing / Creating a new <div> and place it inside of btnContainer
    var newDiv = $('<div class="quest q1">');
    newDiv.html('testing');
    $('.btnContainer').append(newDiv);
    intervalId = setInterval(timeCount, 1000);
    }
    

function timeCount() {
    time--; //time = time-1;
}

//var uAnswer = $("a1").val(); if(uAnswer === questions[0].answer)
/* 
    var uAnswer = [q1Ans, q2Ans,q3Ans];
    for(var i=0;i<uAnswer.length;i++){
        if(uAnswer[i] === questions[i].answer){

        }
    }

    console.log(1)
    console.log(2)
    for(var a=1;a<=1000;i++){
        console.log(i)
    }
*/