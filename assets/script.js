var startBtn = document.getElementById("gameStart");
var questions = [
    ["How do you write 'not equal to'?", "!="], 
    ["What method would you use to retrieve a DOM element by its ID?", "document.getElementById()"], 
    ["How would you retrieve data from LocalStorage?", "localStorage.getItem()"],
    ["True or false, the toString() method returns a number as a string", "/[tT]rue/"],
    ["What will typeof false return as?", "/[bB]oolean/"],
    ["True or false, 'null' and 'undefined' can still contain values", "/[fF]alse/"]
];

var questionNo = 1;
var score = 0;

var timeLeft = 60;
var interval;

function clickButton(){
    check();
    questions.shift();
    questionNo++;
    setup();
};

function setup(){    
    startBtn.addEventListener("click", function(){
        interval = setInterval(countdown, 1000);
        let elem = document.getElementById("timer");

        document.getElementById("titleScreen").remove();
        document.getElementById("subTitleScreen").remove();

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
        btn.classList.add("btn", "btn-outline-dark");
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
        score += 2;
        document.getElementById("text-field").value = "";
    } else if (document.getElementById("text-field").value !== questions[0][1]) {
        console.log("incorrect");
        score--;
        timeLeft -= 3;
        document.getElementById("text-field").value = "";
    }
};

var modal = document.getElementById("scoreModal");
var btn = document.getElementById("viewScores");

var retrieveScores = localStorage.getItem("newscore");
var thisScore = JSON.parse(retrieveScores);
console.log(thisScore);

var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
        document.getElementById("scoresHere").innerHTML = thisScore + "!";
    };

    span.onclick = function() {
        modal.style.display = "none"
    };