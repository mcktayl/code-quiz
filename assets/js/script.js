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
        'correctAnswer': 3
    }, {
        'question': 'Which of the following HTML tags creates a numbered list?',
        'answers': ['ul', 'ol', 'li', 'nl'],
        'correctAnswer': 1
    }, {
        'question': 'Which of the following is the outermost element of the CSS box model?',
        'answers': ['margin', 'border', 'padding', 'content'],
        'correctAnswer': 0
    }, {
        'question': 'Which of the following properties sets the distance between lines of text?',
        'answers': ['line-height', 'font-size', 'height', 'font-family'],
        'correctAnswer': 0
    }, {
        'question': 'Which of the following attributes specifies the alternative text for an image in HTML?',
        'answers': ['text', 'img', 'src', 'alt'],
        'correctAnswer': 3
    }, {
        'question': 'Which of the following notations correctly selects an id tag in CSS?',
        'answers': ['.', '#', '$', '*'],
        'correctAnswer': 1
    }, {
        'question': 'Which of the following is not an appropriate position for CSS?',
        'answers': ['relative', 'criss-cross', 'absolute', 'fixed'],
        'correctAnswer': 1
    }, {
        'question': 'Which of the following is used to make responsive designs in CSS?',
        'answers': ['@media', '@responsive', '@design', '@mobile'],
        'correctAnswer': 0
    }, {
        'question': 'Which of the following CSS properties stretches a photo vertically or horizontally?',
        'answers': ['rotate', 'scale', 'stretch', 'skew'],
        'correctAnswer': 1
    }
]

// Variables for score tracking and time remaining
const startingTime = questionSet.length * 10;
const timePenalty = 10;
var remainingTime;
var timer;
var score;

// Initializing function with event listeners
function init() {
    // Event listener for when start button is pressed
    startButton.addEventListener('click', event => {
        event.preventDefault()
        displayQuestionsPage()
    })
    // Event listener for when answer is chosen
    answerEl.addEventListener('click', function(event) {
        event.preventDefault()
        if (event.target.matches('button')) {
            var button = event.target
            if (button.classList.contains('correct')) {
                resultEl.textContent = 'Correct!'
                score++
            } else {
                resultEl.textContent = 'Incorrect!'
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

    viewHighScoresLink.addEventListener('click', event => {
        event.preventDefault()
        displayHighScorePage()
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

// Function that displays next question
function displayNextQuestion() {
    if (nextQuestionIndex < questionSet.length) {
        const question = randomizedQuestions[nextQuestionIndex].question
        const answers = randomizedQuestions[nextQuestionIndex].answers
        const randomizedAnswers = randomizeArray(answers)
        const correctResult = answers[randomizedQuestions[nextQuestionIndex].correctAnswer]

        questionEl.textContent = question
        answerEl.innerHTML = ''
        resultEl.textContent = ''

        for (var i = 0; i < randomizedAnswers.length; i++) {
            let answer = randomizedAnswers[i]
            let button = document.createElement('button')

            button.classList.add('answer')
            if (answer == correctResult)
            button.classList.add('correct')
            button.textContent = `${i + 1}. ${answer}`
            answerEl.appendChild(button)
        }

        nextQuestionIndex++
    } else {
        clearInterval(timer)
        displayGetNamePage()
    }
}

// Function that displays record score page
function displayGetNamePage() {
    displayPage('submitScoreBox')
    if (remainingTime < 0) remainingTime = 0
    timeRemainingDisplay.textContent = formatSeconds(remainingTime)
    scoreDisplay.textContent = score
}

// Function that displays the high scores page
function displayHighScorePage () {
    displayPage('highScoresPage')

    highScoreList.innerHTML = ''

    clearInterval(timer)

    let highScores = JSON.parse(localStorage.getItem('highscores'))

    let i = 0
    for (const key in highScores) {
        i++
        let highscore = highScores[key]
        var el = document.createElement('div')
        let initials = highscore.initials.padEnd(3, ' ')
        let playerScore = highscore.score.toString().padStart(3, ' ')
        let timeRemaining = formatSeconds(highscore.timeRemaining)
        el.textContent = `${i}. ${initials} - Score: ${playerScore} - Time: ${timeRemaining}`
        highScoreList.appendChild(el)
    }
}

// Function that will take any given array and return a randomly sorted clone
function randomizeArray(array) {
    clone = [...array]
    output = []

    while (clone.length > 0) {
        let r = Math.floor(Math.random() * clone.length);
        let i = clone.splice(r, 1)[0]
        output.push(i)
    }

    return output
}

// Function that starts the count down timer
function startTimer() {
    remainingTime = startingTime
    timeRemainingDisplay.textContent = formatSeconds(remainingTime)

    timer = setInterval(function () {
        remainingTime--

        if (remainingTime < 0) {
            clearInterval(timer)
            displayGetNamePage()
        } else {
            timeRemainingDisplay.textContent = formatSeconds(remainingTime)
        }

    }, 1000)
}

// Function that converts seconds to a 'M:SS' format
function formatSeconds(seconds) {
    let m = Math.floor(seconds / 60).toString().padStart(2, ' ')
    let s = (seconds % 60).toString().padStart(2, '0')
    return `${m}:${s}`
}

init()