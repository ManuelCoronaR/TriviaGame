// Global variables
var time = 20;
var questions = [
    {
        q1: ["What does the HTML stand for?"],
        answers1: [{
            1: "Hyper Text Tool Language",
            2: "Text Markup Tool",
            3: "Hyper Text Markup Language",//Correct Answer

        }],

        q2: ["What does the CSS stand for?"],
        answers2: [{
            a: "b2",
            c: "d2",
            e: "f2",
            g: "h2"
        }],
    }
]


var correctAnswers;
var wrongAnswers;
var intervalId;
// Functions
// =================================
// Test
console.log(questions.q2);
console.log(answers.answers1[0][1]);

function startGame() {
}
function gamePlay() {

    $(".startBtn").on("click", function () {

        // Hides the startBtn
        $('.startBtn').hide();
        timeCount();
        quest1();
        chooseCheckAnswer();
    });
}
function timeCount() {

    time = 7;

    interval = setInterval(timeRemaining, 1000);

    $('.btnContainer').append('<div class="timeRem">' + timeRemaining + '<div class="timerCountDown"></div>' + '</div>');
}
//Print Time remaining to the DOM and once it = 0 timer stops 

function timeRemaining() {
    time--; //Decrement time by 1 or time = time-1;

    $(".timerCountDown").text(time + "seconds");
    //Test / Debug
    console.log(time);
    // Oncetime reaches 0
    if (time === 0) {
        // Test/Debug
        console.log('time = ' + time);
        // Stops time at 0
        clearInterval(interval);
        // Removes button aswers
        $("button").remove();
        // Remove question
        $('.questionInput').remove();
        // Displays correct answer accordingly
        disCorAnsw();

    }
}

function disCorAnsw() {
    //Display correct answer after 5 seconds and moves on to next question
    if (qCounter === 1) {
        var newDiv = $('<div class="corAns">');
        correctAnswer = newDiv.text('Time is up' + asnwers.answers1[0][3]);
        $('.btnContainer').append(correctAnswer);
        //Removes the correct answer after 5 seconds and moves on to the next question 
        setTimeout(function () {
            $('div').remove('.corAnsw');
            quest2();
        }, 5000);
    }
}


function quest1() {

    qCounter++;
    //Add questions to questionInput Div
    $('.btnContainer').append('<div class="questionInput">' + questions.q1 + '</div>');
    //Add answers
    $('.btnContainer').append('<button class="answerVal" value=0>' + answer.answers1[0][1] + '</button>');
    //Add answers
    $('.btnContainer').append('<button class="answersVal" value=0>' + answer.answers1[0][2] + '</button>');
    //Add answers
    $('.btnContainer').append('<button class="answersVal" value=1>' + answer.answers1[0][3] + '</button>');

}

function quest2() {

    qCounter++;
    //Add questions to questionInput Div
    $('.btnContainer').append('<div class="questionInput">' + questions.q2 + '</div>');
    //Add answers
    $('.btnContainer').append('<button class="answerVal" value=0>' + answer.answers2[0][1] + '</button>');
    //Add answers
    $('.btnContainer').append('<button class="answersVal" value=0>' + answer.answers2[0][2] + '</button>');
    //Add answers
    $('.btnContainer').append('<button class="answersVal" value=1>' + answer.answers2[0][3] + '</button>');

}
function chooseCheckAnswer() {
    $('button').on('click', function () {
        //Gets the value attribute of wich ever button is clicked
        var checkRightAnswer = $(this).attr('value');
        //Test / Debug 
        console.log(checkRightAnswer);
        //Stops the time when the right asnwers is selected 
        clearInterval(interval);
        //If the atrribute value of check answer is one...
        if(checkRightAnswer == 1){
            // Test/Debug
            console.log('Correct');
            //Removes button answer
            $('button').remove();
            //Remove question
            $('.questionImput').remove();
        }
        else {
            //Removes button answers
            $('button').remove();
            //Remove question
            $('.questionInput').remove();

        }

    });

}
