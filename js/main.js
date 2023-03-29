// Write your DOM code here!

// Update the JS file such that when a user clicks on one of the colored dots the background color of the entire page changes to match that dot. 
// You should not need to change any HTML or CSS. (note unless you want! BONUS!!)

// BONUS!!
    // Create as many buttons as you would like, changing up as many different CSS properties as you'd want to use
    // Instead of simply changing colors, create a color gradient, or set the background to be an image found on the web
    // Do your changes through 'document.style...' and by toggling different classes


// DOM Elements
let redDot = document.querySelector('#red')
let whiteDot = document.querySelector('#white')
let blueDot = document.querySelector('#blue')
let yellowDot = document.querySelector('#yellow')
let hotPinkDot = document.querySelector('#hotPink')
let limeGreenDot = document.querySelector('#limeGreen')
let cameraDot = document.querySelector('#camera')

// Function for RED
const changeRed = () => {
  document.body.classList.toggle('red')
}
// Click EventListener for RED
redDot.addEventListener('click', changeRed)


// Function for WHITE
const changeWhite = () => {
  document.body.classList.toggle('white')
}
// Click EventListener for WHITE
whiteDot.addEventListener('click', changeWhite)


// Function for BLUE
const changeBlue = () => {
  document.body.classList.toggle('blue')
}
// Click EventListener for BLUE
blueDot.addEventListener('click', changeBlue)


// Function for YELLOW
const changeYellow = () => {
  document.body.classList.toggle('yellow')
}
// Click EventListener for YELLOW
yellowDot.addEventListener('click', changeYellow)


// Function for HOT PINK
const changeHotPink = () => {
  document.body.classList.toggle('hotPink')
}
// Click EventListener for HOT PINK
hotPinkDot.addEventListener('click', changeHotPink)


// Function for LIME GREEN
const changeLimeGreen = () => {
  document.body.classList.toggle('limeGreen')
}
// Click EventListener for LIME GREEN
limeGreenDot.addEventListener('click', changeLimeGreen)


// Function for PICTURE: Camera
const changeCamera = () => {
  document.body.classList.toggle('camera')
}
// Click EventListener for PICTURE: CAMERA
cameraDot.addEventListener('click', changeCamera)


//  The state of toggling dots gets a little interrupted when you select a dot color and try and toggle back to previous colors in the list, working on finding a solution 