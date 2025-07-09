const quizData = {
    question: "Q1. 日本の首都はどこですか？",
    choices: ["大阪", "京都", "東京", "名古屋"],
    correct: "東京"
};


const questionElement = document.querySelector('.question');
const choiceButtons = document.querySelectorAll('.choice-button');
const resultElement = document.querySelector('.result');


questionElement.textContent = quizData.question;
choiceButtons.forEach((button, index) => {
    button.textContent = quizData.choices[index];


    button.addEventListener('click', () => {
        if (button.textContent === quizData.correct) {
            resultElement.textContent = "正解です！";
            resultElement.style.color = "green";
        } else {
            resultElement.textContent = "不正解です。";
            resultElement.style.color = "red";
        }
    });
});
