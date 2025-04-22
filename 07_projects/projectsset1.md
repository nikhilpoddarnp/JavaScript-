# Projects relaated to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id; //or 'grey'
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id; //or 'blue'
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```
## Project 2

```javascript

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results');
  const para = document.querySelectorAll('p');
  const message = para[2]

  if(height === "" || height< 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === "" || weight< 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = ` <snap>${bmi}</snap>`
    if(bmi < 18.6){
      message.innerHTML = "Under Weight"
    }
    else if(bmi < 18.5 && bmi > 24.9){
      message.innerHTML = "Normal Range"
    }
    else {
      message.innerHTML = "Overweight"
    }
  }
})


```
## Project 3

``` javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')


setInterval (function (){
  let date = new Date
  // console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString()
},1000)

```

``` javascript
let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //to check given number is valid for this  guess or not
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter  number more than 1');
  } else if (guess > 100) {
    alert('Please enter  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(` Game over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //guessing number is correct or not
  if (guess === randomNum) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNum) {
    displayMessage('Number is too low');
  } else if (guess > randomNum) {
    displayMessage('Number is too High');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2> ${message} </h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // disable input
  submit.setAttribute('disabled', ''); // disable submit button
  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    // reset everything
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    lowOrHi.innerHTML = '';
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}


```