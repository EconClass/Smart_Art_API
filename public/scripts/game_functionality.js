

const totalScore = document.getElementById('total-score')
const answers = document.getElementsByClassName("answer")
const nxt = document.getElementById("question-next-id")


// sessionStorage.setItem('key', 'value');
let gameScore = sessionStorage.getItem('game-score');
if (gameScore === null) {
  gameScore = 0
}

const random_answer = document.querySelector(".question-answers")
for (var i = random_answer.children.length; i >= 0; i--) {
    random_answer.appendChild(random_answer.children[Math.random() * i | 0]);
}



window.onload = function(e) {
  totalScore.innerHTML = sessionStorage.getItem('game-score')
}

console.log('game-score')

function showCorrectAnswer() {
  gameScore = parseInt(gameScore, 10) + 1 // document.getElementById("total-score").innerHTML
  // let newScore = parseInt(oldScore, 10) + 1

  sessionStorage.setItem('game-score', gameScore);
  totalScore.innerHTML = gameScore
  // console.log(gameScore)

  showAnswers()

}

function showAnswers() {

  for (let i = 0; i < answers.length; i++) {
      answers[i].classList.add('revealed');
      answers[i].disabled  = true;
  }

  // answers.classList.add("clicked")

  // var fyi = document.getElementById("additional-info")
  // fyi.style.display = "block"

  nxt.style.display = "block"

}
