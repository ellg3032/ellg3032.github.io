let triviaBtn = document.querySelector("#js-new-quote");
let answerText = document.querySelector("#js-answer-text");

let gen1btn = document.querySelector("#gen1");
let gen2btn = document.querySelector("#gen2");
let gen3btn = document.querySelector("#gen3");
let gen4btn = document.querySelector("#gen4");
let gen5btn = document.querySelector("#gen5");
let gen6btn = document.querySelector("#gen6");
let gen7btn = document.querySelector("#gen7");
let gen8btn = document.querySelector("#gen8");
let gen9btn = document.querySelector("#gen9");

let current = {
  index: "",
  sprite: "",
  gen: 0,
};

triviaBtn.addEventListener("click", newTrivia);

gen1btn.addEventListener("click", () => {guessGen(1)});
gen2btn.addEventListener("click", () => {guessGen(2)});
gen3btn.addEventListener("click", () => {guessGen(3)});
gen4btn.addEventListener("click", () => {guessGen(4)});
gen5btn.addEventListener("click", () => {guessGen(5)});
gen6btn.addEventListener("click", () => {guessGen(6)});
gen7btn.addEventListener("click", () => {guessGen(7)});
gen8btn.addEventListener("click", () => {guessGen(8)});
gen9btn.addEventListener("click", () => {guessGen(9)});

async function newTrivia() {
  let index = Math.floor(Math.random() * 1025) + 1;
  let endpoint = "https://pokeapi.co/api/v2/pokemon/" + index.toString();
  console.log(index);
  getGen(index);
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayTrivia(json);
    current.index = index;
    current.sprite = json["sprites"]["front_default"];
    answerText.textContent = "";
  } catch (err) {
    console.log(err);
    alert("Failed to get new pokemon");
  }
}

function getGen(index) {
  let gen = 0;
  if (index >= 0 && index <= 151) {
    gen = 1;
  } else if (index >= 152 && index <= 251) {
    gen = 2;
  } else if (index >= 252 && index <= 386) {
    gen = 3;
  } else if (index >= 387 && index <= 493) {
    gen = 4;
  } else if (index >= 494 && index <= 649) {
    gen = 5;
  } else if (index >= 650 && index <= 721) {
    gen = 6;
  } else if (index >= 722 && index <= 809) {
    gen = 7;
  } else if (index >= 810 && index <= 905) {
    gen = 8;
  } else if (index >= 906 && index <= 1025) {
    gen = 9;
  }

  current.gen = gen;
  console.log(gen);
}

function guessGen(gen) {
    console.log(gen);
    if(gen == current.gen) {
        answerText.textContent = "Correct!";
        answerText.style.color = "green";
    }
    else if(gen != current.gen) {
        answerText.textContent = "Not Quite...";
        answerText.style.color = "red";
    }
}

function displayTrivia(question) {
  const sprite = question["sprites"]["front_default"];
  const questionText = document.querySelector("#js-quote-text");
  questionText.src = sprite;
}

newTrivia();
