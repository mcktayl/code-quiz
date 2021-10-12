// Declaring variables
var viewHighScoresLink = document.getElementById ('viewHighScores');
var timeRemainingDisplay = document.getElementById ('timeDisplay');
var startingBox = document.getElementById('startingBox');
var startButton = document.getElementById('startQuiz');
var quizBox = document.getElementById('quizBox');
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answers');
var resultEl = document.getElementById('result');
var scoreDisplay = document.getElementById('scoreDisplay');
var initialsInput = document.getElementById('initialsInput');
var submitInitialsButton = document.getElementById('submitInitials');
var highScoreList = document.getElementById('highScoreList');
var returnToStartButton = document.getElementById ('returnToStart');
var clearHighScoresButton = document.getElementById('clearHighScores');

// Declaring question set as an array within an object
var questionSet = [
    {
        question: 'Which of the following operators means "and"?',
        answers: {
            a: '>=',
            b: '!',
            c: '||',
            d: '&&'
        },
        correctAnswer: 'd'
    },
]

for(var i=0; i < questionSet.length; i++){
    
}

