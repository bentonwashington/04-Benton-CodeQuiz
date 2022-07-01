var timeEl = document.querySelector('.time');
var scoreEl = document.querySelector('#score');
var questionEl = document.querySelector('.question');
var buttonsEl = document.querySelector('.btn');
var choiceaEl = document.querySelector('#choicea');
var choicebEl = document.querySelector('#choiceb');
var choicecEl = document.querySelector('#choicec');
var choicedEl = document.querySelector('#choiced');
var startEl = document.querySelector('#start');

var secondsLeft = 60;
var highScore = 0;

var codingQuiz = {
    question1: '1. Which programming language is known as the foundation or bones of a website?',
    choices1: ['HTML','CSS','Javascript','API'],
    answer1: 'HTML',

    question2: '2. Which programming language is known as the "skin" or styling of a website?',
    choices2: ['HTML','CSS','Javascript','API'],
    answer2: 'CSS',

    question3: '3. Which programming language is known as the "brains" or logic of a website?',
    choices3: ['HTML','CSS','Javascript','API'],
    answer3: 'Javascript',

    question4: '4. Which programming language is a supplement to shorten the "Javascript" programming language?',
    choices4: ['HTML','CSS','Javascript','API'],
    answer4: 'API',
};



function takeQuiz() {
    // start button disappears
startEl.setAttribute('style', 'visibility: hidden');
    // Timer begins when user clicks start button
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds left till quiz ends.';
// supposed to stop when hit 0
        if (secondsleft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
// // Question 1 appears. 
// If right buttton clicked, +50 pts and go to next question
// If wrong button clicked, +0 pts and go to next question
questionEl.textContent = codingQuiz.question1;
if (choiceaEl.clicked == true) {
    questionEl.textContent = codingQuiz.question2;
};
// if(document.getElementById('choicea').clicked == true) {
//     scoreEl.textContent = highScore + 50;
//     questionEl.textContent = codingQuiz.question2
// else
//     scoreEl.textContent = highScore + 0;
//     questionEl.textContent = codingQuiz.question2
// };

}

start.addEventListener("click", takeQuiz)