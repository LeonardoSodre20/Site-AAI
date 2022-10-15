const imgsTransition = document.querySelectorAll('[data-img="imagens"]');
let indexImage = 0;
let maxImages = imgsTransition.length;

//Código para a transição de imagens.
function transitionImages() {
  imgsTransition[indexImage].classList.remove("selected");

  indexImage++;

  if (indexImage >= maxImages) {
    indexImage = 0;
  }

  imgsTransition[indexImage].classList.add("selected");
}

function startTransition() {
  setInterval(() => {
    transitionImages();
  }, 3000);
}

startTransition();
