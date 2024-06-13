const guessfield = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const previousGuess = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

let computerNum = (parseInt(Math.random() * 100) + 1 );

