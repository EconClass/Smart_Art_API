// sessionStorage.setItem('key', 'value');
let gameScore = sessionStorage.getItem('game-score');
if (gameScore === null) {
  gameScore = 0
}

window.onload = function(e) {
  document.getElementById('total-score').innerHTML = sessionStorage.getItem('game-score')
}

console.log('game-score')

function showCorrectAnswer() {
  gameScore = parseInt(gameScore, 10) + 1 // document.getElementById("total-score").innerHTML
  // let newScore = parseInt(oldScore, 10) + 1

  sessionStorage.setItem('game-score', gameScore);

  document.getElementById('total-score').innerHTML = gameScore
  console.log(gameScore)

  showAnswers()

}

function showAnswers() {

  var answers = document.getElementsByClassName("answer")
  for (let i = 0; i < answers.length; i++) {
      answers[i].classList.add('revealed');
      answers[i].disabled  = true;
  }

  // answers.classList.add("clicked")

  // var fyi = document.getElementById("additional-info")
  // fyi.style.display = "block"

  var nxt = document.getElementById("question-next-id")
  nxt.style.display = "block"

}
