/* eslint-disable no-undef */
const arrayOfImages = [
  'picasso',
  'van-gogh',
  'da-vinci'
];

let i = 0;

function myTimer() {
  // var d = new Date();
  if (i < arrayOfImages.length) {
    document.getElementById('background-image').className = arrayOfImages[i];
    i += 1;
  } else {
    i = 0;
  }
}

setInterval(myTimer, 5000);
