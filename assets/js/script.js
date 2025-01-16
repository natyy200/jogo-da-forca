import getWord from "./words.js";

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".new");
btnNew.onclick = () => init();
let indexImg;

init();

function init() {
  indexImg = 1;
  img.src = `./assets/img/img1.png`;

  generateGuessSection();
  generateButtons();
}

function generateGuessSection() {
    contentGuessWord.textContent = '';

    const { word, clue } = getWord();
    const wordWithoutAccent = word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, '');

    Array.from(wordWithoutAccent).forEach((letter) => {
        const span = document.createElement('span');

        span.textContent = '_';
        span.setAttribute('word', letter.toUpperCase());
        contentGuessWord.appendChild(span);

        contentClue.textContent = `Dica: ${clue}`;
    });
}

function generateButtons() {
  contentBtns.textContent = '';

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letter = String.fromCharCode(i).toUpperCase();
    btn.textContent = letter;

    btn.onClick = () => {
        btn.disabled = true;
        btn.style.backgroundColor = "gray";
    };

    contentBtns.appendChild(btn);
  }
};