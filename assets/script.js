var startBtn = document.getElementById("gameStart");
var questions = [["What is 1+1?", "2"], ["What is 2x2?", "4"], ["What is 10+5?", "15"]];

var questionNo = 1;
var score = 0;

var timeLeft = 10;
var interval;

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
        interval = setInterval(countdown, 1000);
        let elem = document.getElementById("timer");

        startBtn.classList.add("hide");
        document.getElementById("questionBox").classList.remove("hide");
        function countdown() {
            if (timeLeft == -1) {
                clearInterval(interval);
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
    });

    if (questions.length != 0){
        document.getElementById("question").innerHTML = questions[0][0];
        document.getElementById("questionNo").innerHTML = "Question " + questionNo;
        } else if (questions.length === 0) {
        clearInterval(interval);
        document.getElementById("questionNo").innerHTML = "You're done!"
        document.getElementById("question").innerHTML = "Your score is: " + score;
        document.getElementById("text-field").remove();
        document.getElementById("button").remove();

        var btn = document.createElement("button");
        btn.innerHTML = "Save Your Score!"
        btn.classList.add("btn", "btn-primary");
        document.body.append(btn);
        
        btn.addEventListener("click", function() {
            var submitName = prompt("Enter your name:");
            var setData = {
                submitName,
                score 
            };

            localStorage.setItem("newscore", JSON.stringify(Object.values(setData)));
        });        
    }; 
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

function showScores() {
    var viewBtn = document.getElementById("viewScores");
    viewBtn.addEventListener("click", function() {
        var retrieveScores = localStorage.getItem("newscore");
        var theseScores = JSON.parse(retrieveScores);
        console.log(theseScores);

        // var scoreList = document.createElement("li");
        
        // for (var i = 0; i < theseScores.length; i++) {
        //     scoreList.appendChild(document.createTextNode(theseScores));
        //     list.appendChild(scoreList);

        // };
    });
};



// function endGame() {
//     document.getElementById("questionBox").classList.add("hide");
// }