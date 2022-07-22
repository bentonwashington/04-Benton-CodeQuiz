var timeEl = document.querySelector('.time');
var scoreEl = document.querySelector('#score');
var questionEl = document.querySelector('.question');
var buttonsEl = document.querySelector('#buttons');
var choiceaEl = document.querySelector('#choicea');
var choicebEl = document.querySelector('#choiceb');
var choicecEl = document.querySelector('#choicec');
var choicedEl = document.querySelector('#choiced');
var startEl = document.querySelector('#start');

var secondsLeft = 60;
var highScore = 0;

var questionIndex = 0

var codingQuiz = [{
    question: ' 1. Which programming language is known as the foundation or bones of a website?',
    choices: ['HTML','CSS','Javascript','API'],
    answer: 'HTML',
},{

    question: ' 2. Which programming language is known as the "skin" or styling of a website?',
    choices: ['HTML','CSS','Javascript','API'],
    answer: 'CSS',
},{
    question: ' 3. Which programming language is known as the "brains" or logic of a website?',
    choices: ['HTML','CSS','Javascript','API'],
    answer: 'Javascript',
},{
    question: ' 4. Which programming language is a supplement to shorten the "Javascript" programming language?',
    choices: ['HTML','CSS','Javascript','API'],
    answer: 'API',
}];

function next (event) {
    console.log(event)
    if (event.target.textContent === codingQuiz[questionIndex].answer){
        scoreEl.textContent = highScore += 50;
        questionIndex ++;
        questionRender();
    }
    else {
        questionIndex ++;
        questionRender();
    }
    if (questionIndex = 4){
        funtion 
        
    }
}




function takeQuiz() {
    // Start button disappears
startEl.setAttribute('style', 'visibility: hidden');
    // Timer begins when user clicks start button
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + ' seconds left till quiz ends.';
        scoreEl.textContent = highScore ;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
// // Question 1 appears. 
// If right buttton clicked, +50 pts and go to next question
// If wrong button clicked, go to next question
questionRender();
}

function questionRender(){
    questionEl.textContent = codingQuiz[questionIndex].question;
    choiceaEl.textContent = codingQuiz[questionIndex].choices[0];
    choicebEl.textContent = codingQuiz[questionIndex].choices[1];
    choicecEl.textContent = codingQuiz[questionIndex].choices[2];
    choicedEl.textContent = codingQuiz[questionIndex].choices[3];
}

start.addEventListener("click", takeQuiz);

buttonsEl.addEventListener("click", next);