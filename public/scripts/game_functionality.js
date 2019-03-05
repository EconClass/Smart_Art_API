function showCorrectAnswer() {
  var oldScore = document.getElementById("total-score").innerHTML
  let newScore = parseInt(oldScore, 10) + 1

  document.getElementById('total-score').innerHTML = newScore
  console.log(newScore)

  showAnswers()

}

function showAnswers() {

  var answers = document.getElementsByClassName("answer")
  for (let i = 0; i < answers.length; i++) {
      answers[i].classList.add('revealed');
      answers[i].disabled  = true;
  }

  // answers.classList.add("clicked")

  var fyi = document.getElementById("additional-info")
  fyi.style.display = "block"

  var nxt = document.getElementById("question-next-id")
  nxt.style.display = "block"

}
