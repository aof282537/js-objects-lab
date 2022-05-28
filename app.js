const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  PrevGuesses: [],

  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      
    },
  getGuess: function(){
   let play = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
   console.log(play)
   if (typeof play === 'number'){
     console.log(typeof play)
   }
  } 
}
// console.log(game)
// console.log(game.prevGuesses) 
game.getGuess()