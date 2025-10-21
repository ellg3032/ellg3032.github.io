let triviaBtn = document.querySelector("#js-new-quote");
let answerBtn = document.querySelector("#js-tweet");
let current = {
    question: "",
    answer: "",
}
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

triviaBtn.addEventListener('click', newTrivia);
answerBtn.addEventListener('click', newAnswer);

async function newTrivia() {
    try {
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayTrivia(json["question"]);
        current.question = json["question"];
        current.answer = json["answer"];
    } catch(err) {
        console.log(err);
        alert('Failed to get new trivia');
    }
}

function displayTrivia(question) {
    const questionText = document.querySelector('#js-quote-text');
    const answerText = document.querySelector("#js-answer-text");
    questionText.textContent = question;
    answerText.textContent = "";
}

function newAnswer() {
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = current.answer;
}

newTrivia();