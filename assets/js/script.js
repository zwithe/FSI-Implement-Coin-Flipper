
let headsFlips = 0
let tailsFlips = 0
let totalFlips = 0
let headsPercent = "0%"
let tailsPercent = "0%"



document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#flip').addEventListener('click', function(){
    let coinFlip = Math.ceil(Math.random() * 2)
    if (coinFlip == 1) {
        //flip heads
        headsFlips++
        totalFlips++
        document.querySelector('#heads').textContent =  headsFlips
        if (tails == 0){
            return false;
        } else {
        document.querySelector('#heads-percent').textContent =  Math.round(headsFlips/totalFlips * 100) + '%'
        document.querySelector('#tails-percent').textContent =  Math.round(tailsFlips/totalFlips * 100) + '%'
        }
        document.querySelector('#message').textContent =  'You Flipped Heads!' 
        document.querySelector('#penny-image').src =  './assets/images/penny-heads.jpg'
    } else {
        //flip tails
        console.log('tails')
        tailsFlips++
        totalFlips++
        document.querySelector('#tails').textContent =  tailsFlips
        if (heads == 0){
            return false; 
        } else {
        document.querySelector('#heads-percent').textContent =  Math.round(headsFlips/totalFlips * 100) + '%'
        document.querySelector('#tails-percent').textContent =  Math.round(tailsFlips/totalFlips * 100) + '%'
        }
        document.querySelector('#message').textContent =  'You Flipped Tails!' 
        document.querySelector('#penny-image').src =  './assets/images/penny-tails.jpg'
    }

    })

  document.querySelector('#clear').addEventListener('click', function(){
            //Clear button resets to defaults
        headsFlips = 0
        tailsFlips = 0
        totalFlips = 0
        headsPercent = "0%"
        tailsPercent = "0%"
        document.querySelector('#message').textContent =  "Let's Get Flipping!" 
        document.querySelector('#penny-image').src =  './assets/images/penny-heads.jpg'
        document.querySelector('#heads').textContent =  headsFlips
        document.querySelector('#tails').textContent =  tailsFlips
        document.querySelector('#heads-percent').textContent = "0%"
        document.querySelector('#tails-percent').textContent = "0%"
    
    
        })
})