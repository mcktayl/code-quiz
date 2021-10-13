# code-quiz

## Description

My goal was to build a timed multiple choice quiz that advances upon selection of an answer and subtracts time when that answer is incorrect.  Ultimately, the user should be able to submit their score as a high score, which is saved onto the browser and can be viewed by clicking the "View High Scores" link in the top left corner.  I built this to help enhance my understanding of Javascript and to formulate a template that can be used to study any subject.

This project deepened my understanding of HTML, CSS, and Javascript.  The HTML element was built from scratch, which required me to wireframe a design and implement it through the use of descriptive class and id tags.  Creating the CSS stylesheet was an excellent opportunity to gain more experience with flex positioning and dimensions.  The Javascript included in this project required me to further my understanding of third party APIs, local storage, objects, arrays, functions, and listener events.

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

This project runs in the browser and requires no installation by the user.

## Usage

The user is immediately prompted with a description of the quiz and the penalty for an incorrect answer.
![screenshot01](https://user-images.githubusercontent.com/91210267/137063770-296bce82-2a4b-4db0-adba-2655b4d51de9.png)

Once the user selects to start the quiz, they are shown a question with four options to choose from.  Selecting a correct answer increases their score by 1 and selecting an incorrect answer reduces their time remaining by 10 seconds.
![screenshot02](https://user-images.githubusercontent.com/91210267/137063811-e15865a2-b420-4626-af1f-00be6721f73a.png)

At the end of the quiz, the user is shown their score and prompted to enter their initials to save their score.
![screenshot03](https://user-images.githubusercontent.com/91210267/137063860-21e5f500-3104-4686-b475-d273b1e16667.png)

After submitting their score or upon clicking the "View High Scores" link in the top left corner, the user is shown a list of high scores, sorted by score and then by time remaining upon completion.  The user can start the quiz again or clear the list.
![screenshot04](https://user-images.githubusercontent.com/91210267/137063868-ef0e5411-b807-4a5c-8162-8b25e7f2e66d.png)

Video demonstration
https://user-images.githubusercontent.com/91210267/137063905-eebe562f-640a-4a98-9719-438ad6d03c6c.mp4


## Credits

Tutorials used:
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
(https://www.w3schools.com/jsref/jsref_now.asp)
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
(https://www.w3schools.com/jsref/jsref_foreach.asp)
(https://www.w3schools.com/jsref/met_win_clearinterval.asp)
(https://medium.com/nerd-for-tech/var-let-and-const-in-javascript-15e41cf90f01)
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
(https://www.w3schools.com/js/js_loop_while.asp)
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
(https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds)

## License

MIT License

Copyright (c) [2021] [McKenzie Cottrell]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
