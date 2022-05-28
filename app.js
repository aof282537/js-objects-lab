const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      },
      getGuess: function() {
        let play = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
        console.log(play)
        if (typeof play === 'number'){
          console.log(typeof play)
        }
        while (isNaN(play) || play < this.smallestNum || play > this.biggestNum)
        return play;
  },

  
  render: function() {
    let message; 
    if (this.prevGuesses[this.prevGuesses.length-1] === this.secretNum) {
      message = `Congrats! You guessed the number in ${this.prevGuesses.length}!`
    } else if (this.prevGuesses[this.prevGuesses.length-1] > this.secretNum) {
      message = `Your guess is too high ${this.prevGuesses.join(',')}!`
    } else if (this.prevGuesses[this.prevGuesses.length-1] < this.secretNum) {
      message = `You guess is to low ${this.prevGuesses.join(',')}!`
    }
    alert(message)
  } 
}
// console.log(game)
// console.log(game.prevGuesses) 
game.getGuess() 