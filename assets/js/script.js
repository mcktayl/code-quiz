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

// Variable containing question set
var questionSet = [
    {
        'question': 'Which of the following operators means "and"?',
        'answers': ['>=', '!', '||', '&&'],
        'correctAnswer': 4
    }, {
        'question': 'Which of the following HTML tags creates a numbered list?',
        'answers': ['ul', 'ol', 'li', 'nl'],
        'correctAnswer': 2
    }, {
        'question': 'Which of the following is the innermost element of the CSS box model?',
        'answers': ['margin', 'border', 'padding', 'content'],
        'correctAnswer': 4
    }
]

