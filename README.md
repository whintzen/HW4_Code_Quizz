# HW4_Code_Quizz
As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.


For this quiz project I will need:
1.	Questions, Answers
2.	A start button to start the process
3.	A timer that will count down as the questions are being answered
4.	A place to show the questions
5.	A place to store the answers
6.	A way to loop the counts of the questions and return the correct answer counts
7.	A way to end the timer once all the questions are answered 
8.	A way to end the Quiz if the timer runs out 
 This project was an exceedingly difficult one.  A lot of research was done and review of a lot of examples Quizzes to get an idea.  There are some parts of this code where I had to borrow code from either W3School or something I saw on Codepen.

Start the Quiz:
Clicking on the Start button, starts the code Quiz by calling the startQuiz function.  This function starts the timer which is set to 75 seconds and it also starts the first of 5 questions. 

Timer:
As part of the startQuiz function, the Timer is displayed in the upper right hand corner of the app. The timer runs until all the questions are answered and stops the game or if all the questions are not answered within the 75 seconds  timeframe, the timer runs down to zero and the app returns the your total score and the number of correct answers or if none were answered, then a 0 score will appear.
 
Body of Quiz: 
The Quiz presents the first question and the list of answers, the user has the option of selecting 1 of 4 answers.   Once the user clicks on the answer, the quiz will perform the looping logic to see if the correct answer was selected.  If a correct answer, it is marked as correct, if Incorrect, it is marked as Incorrect.   The answers are stored in local storage.   Once all the questions are answered, the Quiz will go to the Local Storage and get the total correct answers recorded and present the score. 

Scoring:
For each right answer, 20 POINTS are added and for each incorrect answer, 15 SECONDS is removed from the timer. 
In the Browser, right click and selcet Inspect, under Applications, go to Local Storage and click on the drop down.  The score for the game will be reflected here.  

Final Results:
The quiz will present the score achieved out of 100 points and how many questions were answered correctly.  There is a text box that will request the user to enter their First Name into the text box.  Once the First Name is entered, they will click on Set Score and the Quiz will display the final score.  That score is stored in local storage. 

This quiz allows you to play again.  You can also clear the score, by pressing "Clear Score" and the score is cleared from Local storage


Link to slides Show of the steps: 
https://docs.google.com/presentation/d/1wLzRQmU4W1fuQI5hCIkyvZRQSTN7reefWmX6lC6cxIQ/edit?usp=sharing

URL Link to my Github:
https://github.com/whintzen/HW4_Code_Quizz.git

URL Link to view the app:
https://whintzen.github.io/HW4_Code_Quizz/index.html