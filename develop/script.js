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

var display = document.querySelector('.display');
var start = document.querySelector('.start-button');
var timeEl = document.querySelector('.time');
var secondsLeft = 60;

function startTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + 'seconds left till quiz ends.';

        if(secondsleft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

start.addEventListener("click", startTime)