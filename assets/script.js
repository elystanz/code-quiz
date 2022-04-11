var questions = [["What is 1+1?", "2"], ["What is 2x2?", "4"], ["What is 10+5?", "15"]];

var questionNo = 1;
var score = 0;

var startBtn = document.getElementById("gameStart");



var timeLeft = 10;

function clickButton(){
    check();
    questions.shift();
    questionNo++;
    setup();
};

    // document.getElementById("questionNo").innerHTML = "JavaScript Code Quiz!";
    // document.getElementById("question").innerHTML = "Take this timed quiz to test your JS knowledge, and maybe beat the high score!";

function setup(){    
    startBtn.addEventListener("click", function(){
        startBtn.classList.add("hide");
        document.getElementById("questionBox").classList.remove("hide");

        
        var timerId = setInterval(countdown, 1000);
        var elem = document.getElementById("timer");

        
        function countdown() {
            if (timeLeft == -1) {
                clearInterval(timerId);
                elem.innerHTML = "Time's up!"
                document.getElementById("timer").textContent = "Time's up!"
                document.getElementById("questionNo").innerHTML = "You're out of time!"
                document.getElementById("question").innerHTML = "Your score is: " + score;
                document.getElementById("text-field").remove();
                document.getElementById("button").remove();
                
            } else {
                elem.innerHTML = timeLeft + " seconds remaining";
                timeLeft--

            } 
        }

        if (questions.length != 0){
            document.getElementById("question").innerHTML = questions[0][0];
            document.getElementById("questionNo").innerHTML = "Question " + questionNo;
            
         } else {
            clearInterval(timerId);
            document.getElementById("questionNo").innerHTML = "You're done!"
            document.getElementById("question").innerHTML = "Your score is: " + score;
            document.getElementById("text-field").remove();
            document.getElementById("button").remove();
        }



        // var gameTimer = setInterval(function(){

        //     document.getElementById("timer").innerHTML = timeLeft + " seconds remaining";

        //     timeLeft -= 1;

        //     if (timeLeft <= -1) {
        //         clearInterval(gameTimer);
        //         document.getElementById("timer").textContent = "Time's up!"
        //         document.getElementById("questionNo").innerHTML = "You're out of time!"
        //         document.getElementById("question").innerHTML = "Your score is: " + score;
        //         document.getElementById("text-field").remove();
        //         document.getElementById("button").remove();
                
        //     } 
        // }, 1000);

        // if (questions.length <= 0) {
        //     document.getElementById("questionNo").innerHTML = "You're done!"
        //     document.getElementById("question").innerHTML = "Your score is: " + score;
        //     document.getElementById("text-field").remove();
        //     document.getElementById("button").remove();
        // }
        // console.log()
    });

    // if (questions.length != 0){
    //     document.getElementById("question").innerHTML = questions[0][0];
    //     document.getElementById("questionNo").innerHTML = "Question " + questionNo;
    // } else {
    //     clearInterval(timerId);
    //     document.getElementById("questionNo").innerHTML = "You're done!"
    //     document.getElementById("question").innerHTML = "Your score is: " + score;
    //     document.getElementById("text-field").remove();
    //     document.getElementById("button").remove();
    
    // }
};

function check(){
    if (document.getElementById("text-field").value === questions[0][1]) {
        console.log("correct");
        score++;
        document.getElementById("text-field").value = "";
    } else if (document.getElementById("text-field").value !== questions[0][1]) {
        console.log("incorrect");
        score--;
        timeLeft -= 3;
        document.getElementById("text-field").value = "";
    }
};

function endGame() {
    document.getElementById("questionBox").classList.add("hide");
}