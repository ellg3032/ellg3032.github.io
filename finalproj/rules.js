const seekerhead = document.querySelector(".seekerHeader");
const seekerDetails = document.querySelector(".seeker-rules");
const hiderhead = document.querySelector(".hiderHeader");
const hiderDetails = document.querySelector(".hider-rules");
const questionshead = document.querySelector(".questionsHeader");
const questionsDetails = document.querySelector(".question-rules");
const curseshead = document.querySelector(".cursesHeader");
const cursesDetails = document.querySelector(".curse-rules");
let seekerShown = false;
let hiderShown = false;
let questionsShown = false;
let cursesShown = false;

addEventListener("keydown", showRules);

seekerhead.addEventListener("click", showSeeker);
hiderhead.addEventListener("click", showHider);
questionshead.addEventListener("click", showQuestions);
curseshead.addEventListener("click", showCurses);

function showRules(event) {
  if (event.key == "s") {
    showSeeker();
  } else if (event.key == "c") {
    showCurses();
  } else if (event.key == "h") {
    showHider();
  } else if (event.key == "q") {
    showQuestions();
  }
}

function showSeeker() {
  if (seekerShown == false) {
    seekerDetails.style.display = "block";
    seekerShown = true;
  } else {
    seekerDetails.style.display = "none";
    seekerShown = false;
  }
}

function showQuestions() {
  if (questionsShown == false) {
    questionsDetails.style.display = "block";
    questionsShown = true;
  } else {
    questionsDetails.style.display = "none";
    questionsShown = false;
  }
}

function showHider() {
  if (hiderShown == false) {
    hiderDetails.style.display = "block";
    hiderShown = true;
  } else {
    hiderDetails.style.display = "none";
    hiderShown = false;
  }
}

function showCurses() {
  if (cursesShown == false) {
    cursesDetails.style.display = "block";
    cursesShown = true;
  } else {
    cursesDetails.style.display = "none";
    cursesShown = false;
  }
}
