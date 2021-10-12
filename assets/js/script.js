// Declaring variables
var main = document.getElementsByTagName('main')[0];
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
        'question': 'Which of the following is the outermost element of the CSS box model?',
        'answers': ['margin', 'border', 'padding', 'content'],
        'correctAnswer': 1
    }
]

// Variables for score tracking and time remaining
const startingTime = questionSet.length * 8;
const timePenalty = 10;
var remainingTime;
var timer;
var score;

// Initializing function with event listeners
function init() {
    // Event listener for when start button is pressed
    startButton.addEventListener('click', event => {
        event.preventDefault()
        displayQuestionPage()
    })
    // Event listener for when answer is chosen
    answerEl.addEventListener('click', function(event) {
        event.preventDefault()
        if (event.target.matches('button')) {
            var button = event.target
            if (button.classList.contains('correct')) {
                resultEl.textContent = 'Correct!'
                quizBox.children[nextQuestionIndex -1].classList.add('correct')
                score++
            } else {
                resultEl.textContent = 'Incorrect!'
                quizBox.children[nextQuestionIndex -1].classList.add('incorrect')
                remainingTime -= timePenalty
            }
            if (remainingTime > 0) displayNextQuestion ()
            else displayGetNamePage()
        }
    })
    // Event listener for when highscore & initials are submitted
    submitInitialsButton.addEventListener('click', event => {
        event.preventDefault ()
        let initials = initialsInput.value.toUpperCase()
        if (initials) {
            let highScores = JSON.parse(localStorage.getItem('highscores')) || []

            timestamp = Date.now()
            highScores.push({
                'timestamp': timestamp,
                'score': score,
                'initials': initials,
                'timeRemaining': remainingTime
            })

            highScores = highScores.sort((a, b) => {
                if (a.score != b.score) return b.score - a.score
                if (a.timeRemaining != b.timestamp) return a.timestamp - b.timestamp
                return 0
            })

            localStorage.setItem('highscores', JSON.stringify(highScores))

            displayHighScorePage ()
            initialsInput.value = ''
        }
    })
    // Event listener to restart quiz
    returnToStartButton.addEventListener('click', event => {
        event.preventDefault()
        displayStartingPage()
    })
    // Event listener to clear saved high scores
    clearHighScoresButton.addEventListener('click', event => {
        var confirmed = confirm('This will clear all of the saved highscores. Would you like to continue?')
        if (confirmed) {
            event.preventDefault()
            localStorage.setItem('highscores', '[]')
            displayHighScorePage()
        }
    })
    // Display the starting page
    displayStartingPage()
}

// Function which displays correct page and hides the rest
function displayPage(id) {
    main.querySelectorAll('.page').forEach(page => {
        if (page.id == id) {
            page.classList.remove('hidden')
        } else {
            page.classList.add('hidden')
        }
    })
    return 4
}

// Function that displays the starting page
function displayStartingPage() {
    displayPage('startingBox')

    clearInterval(timer)
    remainingTime = 0
    timeRemainingDisplay.textContent = formatSeconds(remainingTime)
}

// The index of question currently being displayed to user
var nextQuestionIndex;
// A randomly sorted clone of the questions array
var randomizedQuestions;

// Function that displays the quiz page
function displayQuestionsPage () {
    displayPage('quizBox')

    // Sets up the question numbers above the quiz
    questionEl.innerHTML = '';

    for (var i = 0; i < questionSet.length; i++) {
        const element = questionSet[i];
        var el = document.createElement('span')
        el.textContent = i + 1
        questionEl.appendChild(el)
    }

    // Creates a randomly sorted clone of the questions array
    randomizedQuestions = randomizeArray(questionSet)

    // Resets values back to default
    nextQuestionIndex = 0;
    score = 0;

    // Starts the timer 
    startTimer()

    // Sets up the first question
    displayNextQuestion()
}



// Starts the timer 
startTimer()

//