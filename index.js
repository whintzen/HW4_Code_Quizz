// what I will need for this quiz.
//      1. Questions, Answers
//      2. A start button to start the process
//      3. A timer that counts down as the questions are being started
//      4. A place to show the questions
//      5. A place to store the answers
//      6. A way to loop the counts of the questions and returns the correct answer counts
//      7. A way to end the timer once all the questions are answered
//      8. A way to end the Quiz if the timer runs out
// This was a difficult assignment and alot of the code is borrowed code where noted

//Define the Questions, multiple choices and the answers
//Used an example supplied by W3School
const myQuestions = [
    {
      question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
      multipleChoice: [
       "a: last",
       "b: put", 
       "c: push", 
       "d: pop"
      ],
      correctAnswer: "c: push"
    },

    {
      question: "what does Typeof do in JavaScript?",
      multipleChoice: [
       "a: returns the data type",
       "b: shows the console data",
       "c: returns a variable",
       "d: returns an expression"
      ],
      correctAnswer: "a: returns the data type"
    },

    {
      question: "Which built-in method returns the characters in a string beginning at the specified location?",
      multipleChoice: [
       "a: substr",
       "b: slice",
       "c: getSubstring",
       "d: None of the above"
      ],  
       correctAnswer: "a: substr"
    },

    {
      question: "Which of the following function of an array object adds and/or removes elements from an array?",
      multipleChoice: [
       "a: splice",
       "b: toSource",
       "c: sort",
       "d: unshift"
      ],
      correctAnswer: "a: splice"
    },

    {
      question: "This method does not change the existing strings, but returns a new string containing the text of the joined string?",
      multipleChoice: [
       "a: add",
       "b: concat",
       "c: merge",
       "d: append"
      ],
      correctAnswer: "b: concat"
    }
];


// Defining the variables needed for the process
var score = 0;
var currentQuestion = -1;
var timeRemaining = 0;
var timer;

//This step calls the function startQuiz which requires the user to click on the Start button
//this function will start the timer and keep a running check.  if the timer runs out the game comes to an end
//Once this process starts, the next function that needs to execute is called

// logic used from w3S

function startQuiz() {
  //Set the starting time 
timeRemaining = 75;
document.getElementById("timeRemaining").innerHTML = timeRemaining;

// Keep a running time of the clock
timer = setInterval(function() {
    timeRemaining--;
    document.getElementById("timeRemaining").innerHTML = timeRemaining;
    //proceed to end the game function when timer is less then or equal to 0 at any time
    // clear the timer and end the game
    if (timeRemaining <= 0) {
        clearInterval(timer);

       endTheGame(); 
       
    }
}, 1000);

next();
}

// stop the timer to end the game and displays the results in the 
// bodyofQuizz/body content using HTML template literals in the JavaScript code  
// and also setting the button click
// Saw something similiar on Codepen and used that logic 

function endTheGame() {
clearInterval(timer);
// This HTML will display the total of your score and how many you scored out of 100.
// It is 100 total point, because each question is worth 20 points.  It will also retun how many
// of the 5 questions you got correct e.g 4 of 5, 5 of 5 etc.  This is attained by dividing your total
// correct answers by 20, so 80 points = 80/20 = 4 of 5 correct answers 
var quizContent = `
<h2>Game over!</h2>
<h3>You got a ` + score +  ` out of 100!</h3>
<h3>That means you got ` + score / 20 +  ` questions correct!</h3>
<input type="text" id="Name" placeholder="First name"> 
<button onclick="setScore()">Set score!</button>`;

// This step causes the HTML to display in the body content
document.getElementById("bodyOfQuizz").innerHTML = quizContent;

}

//stores the scores on local storage. Captured this from W3S
function setScore() {
localStorage.setItem("score", score);
localStorage.setItem("scorersName",  document.getElementById('Name').value);

getScore();
}

//**************************************************** */
// This function gets the score from local storage and displays it in the Body of the Quiz
// This information is displayed in the body of the Quiz using HTML code
// Reviewed W3School for examples of how to code this

function getScore() {
  var quizContent = `
  <h2>` + localStorage.getItem("scorersName") + `'s score is:</h2>
  <h1>` + localStorage.getItem("score") + `</h1><br> 
       
  <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
  
  `;
 
  // This step causes the HTML to display in the body content  
  document.getElementById("bodyOfQuizz").innerHTML = quizContent;
  
  }
//**************************************888 */

//clears the score name and value in the local storage if the user selects 'clear score'
function clearScore() {
localStorage.setItem("score", "No Recorded Score");
localStorage.setItem("scorersName",  "");

resetGame();
}

// reset the game 
function resetGame() {
clearInterval(timer);
score = 0;
currentQuestion = -1;
timeRemaining = 0;
timer = null;

// This step displays the reset time to 0 and changes the background to original setting
document.getElementById("timeRemaining").innerHTML = timeRemaining;

// This step causes the timer to display the remaining time
// document.getElementById("timeRemaining").innerHTML = timeRemaining;
// Saw something similiar on Codepen and used that logic
// These HTML code is displayed in the bodyofQuizz/body content and the onclick Start button
// is defined here.  This is the starting point of the whole page when this function is called
// by clicking the Start button

var quizContent = `
<h1>
    Coding Quiz Challenge!
</h1>
<h5> Try to answer the following questions:</h5>
<h3> Click the Start Button! </h3>
<button onclick="startQuiz()">Start!</button>`;

document.getElementById("bodyOfQuizz").innerHTML = quizContent;
}
 
//deduct 15 seconds from the timer if user chooses an incorrect answer
function incorrect() {
timeRemaining -= 15; 
next();
}

//increases the score by 20 points if the user chooses the correct answer
function correct() {
score += 20;
next();
}

//loops through the questions

var next = function() {
currentQuestion++;

// When you come to the end of the questions execute the function endTheGame
if (currentQuestion > myQuestions.length - 1) {
    endTheGame();
    return;
}

// this example was online and I borrowed it as I was having problems with defining the loops
// The code loops thru the questions (MyQuestions), adding 1 to go from one question to the next
// For each question, click on one of the multipleChoice answers.  If the correct answer is selected for the 
// current question, then count it as correct, if an incorrect answer is selected for the current question
// then count it as an incorrect answer.  Display only the correct answer and the score in the body of the Quiz content
var quizContent = "<h2>" + myQuestions[currentQuestion].question + "</h2>"

for (var i = 0; i < myQuestions[currentQuestion].multipleChoice.length; i++) {
  var selectAnswer = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
  selectAnswer = selectAnswer.replace("[CHOICE]", myQuestions[currentQuestion].multipleChoice[i]);
  if (myQuestions[currentQuestion].multipleChoice[i] == myQuestions[currentQuestion].correctAnswer) {
    selectAnswer = selectAnswer.replace("[ANS]", "correct()");
  } 
  else {
    selectAnswer = selectAnswer.replace("[ANS]", "incorrect()");
  }
  quizContent += selectAnswer
  
}

document.getElementById("bodyOfQuizz").innerHTML = quizContent;
}