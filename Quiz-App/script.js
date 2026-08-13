const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyper Tool Markup Language", correct: false },
            { text: "Home Text Language", correct: false }
        ]
    },

    {
        question: "Which language is used for styling web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Java", correct: false },
            { text: "Python", correct: false }
        ]
    },

    {
        question: "Which language is used for web programming?",
        answers: [
            { text: "JavaScript", correct: true },
            { text: "C", correct: false },
            { text: "Java", correct: false },
            { text: "PHP", correct: false }
        ]
    },

    {
        question: "Which company developed Java?",
        answers: [
            { text: "Sun Microsystems", correct: true },
            { text: "Microsoft", correct: false },
            { text: "Google", correct: false },
            { text: "Apple", correct: false }
        ]
    }
];

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {

    nextBtn.style.display = "none";

    answers.innerHTML = "";

    let q = questions[currentQuestion];

    question.innerHTML = (currentQuestion + 1) + ". " + q.question;

    q.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerHTML = answer.text;

        button.classList.add("btn");

        answers.appendChild(button);

        button.onclick = () => {

            if (answer.correct) {

                button.style.background = "green";

                score++;

            } else {

                button.style.background = "red";

            }

            Array.from(answers.children).forEach(btn => btn.disabled = true);

            nextBtn.style.display = "block";

        };

    });

}

nextBtn.onclick = () => {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showScore();

    }

};

function showScore() {

    question.innerHTML = `Quiz Finished!<br>Your Score : ${score}/${questions.length}`;

    answers.innerHTML = "";

    nextBtn.innerHTML = "Play Again";

    nextBtn.style.display = "block";

    nextBtn.onclick = startQuiz;

}

startQuiz();