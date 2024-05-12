const questionContainer = document.getElementById("questioncontainer");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerbutton");
const nextButton = document.getElementById("nextbutton");
const restartButton = document.getElementById("restartbutton");
const resultDivision = document.getElementById("result");

let randomQuestions, currentQuestionIndex, score;

const questions = [
    {
        question: "Who is the first person to go to Space ?",
        answers: [
            { text: "Yuri Alekseyevich Gagarin ", correct: true },
            { text: "Scott Kelly", correct: false },
            { text: "Neil Armstrong", correct: false },
        ],

    },
    {
        question: "Who is the first person to step on the Moon ?",
        answers: [
            { text: "Buzz Aldrin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Frank Borman", correct: false },
        ],
    },
    {
        question: "Which is the first crewed vehicle to land on the Moon ?",
        answers: [
            { text: "Apollo 11 Lunar Module (LM)", correct: true },
            { text: "Lunar Roving Vehicle (LRV)", correct: false },
            { text: "Luna 2", correct: false },
        ],
    },
    {
        question: "What is the first name of Indian missile ?",
        answers: [
            { text: "Satellite Launch Vehicle (SLV-3)", correct: false },
            { text: "Agni-1", correct: false },
            { text: "Prithvi", correct: true },
        ],
    },
    {
        question: "Which was the first rocket launch in India by Abdul Kalam ?",
        answers: [
            { text: "Satellite Launch Vehicle (SLV-3)", correct: true },
            { text: "Prithvi", correct: false },
            { text: "Agni-1", correct: false },
        ],
    },
    {
        question: "What was the first airplane called ?",
        answers: [
            { text: "Heinkel He 178", correct: false },
            { text: "Blériot XI", correct: false },
            { text: "Wright Flyer", correct: true },
        ],
    },
    {
        question: "Who was the first Indian woman airline pilot ?",
        answers: [
            { text: "Amelia Earhart", correct: false },
            { text: "Harriet Quimby", correct: false },
            { text: "Durga Banerjee", correct: true },
        ],
    },
    {
        question: "Who was the first female pilot in India ?",
        answers: [
            { text: "Sarla Thakral", correct: true },
            { text: "Durga Banerjee", correct: false },
            { text: "Amelia Earhart", correct: false },
        ],
    },
    {
        question: "Who is the first woman to climb Mount Everest in the world ?",
        answers: [
            { text: "Lydia Bradey", correct: false },
            { text: "Junko Tabei", correct: true },
            { text: "Santosh Yadav", correct: false },
        ],
    },
    {
        question: "Which person climb Mount Everest first ?",
        answers: [
            { text: "Edmund Hillary", correct: false },
            { text: "Tenzing Norgay", correct: false },
            { text: "Both Edmund Hillary & Tenzing Norgay", correct: true },
        ],
    },
    {
        question: "Who is the first woman who climbed Mount Everest in India ?",
        answers: [
            { text: "Malavath Poorna", correct: false },
            { text: "Lydia Bradey", correct: false },
            { text: "Bachendri Pal", correct: true },
        ],
    },
    {
        question: "Who was the first Indian man to climb Mount Everest ?",
        answers: [
            { text: "Phu Dorjee", correct: true },
            { text: "Tenzing Norgay", correct: false },
            { text: "Nawang Gombu", correct: false },
        ],
    },
    {
        question: "Who is the first governor ?",
        answers: [
            { text: "Lord William Bentinck", correct: true },
            { text: "Warren Bennis", correct: false },
            { text: "Lord Mayo", correct: false },
        ],
    },
    {
        question: "Who was the first person to sail around the world ?",
        answers: [
            { text: "Sir Francis Drake", correct: false },
            { text: "Ferdinand Magellan", correct: true },
            { text: "Nao Victoria", correct: false },
        ],
    },
    {
        question: "Who was the first female Prime Minister in the world ?",
        answers: [
            { text: "Khertek Anchimaa-Toka", correct: false },
            { text: "Sirimavo Bandaranaike", correct: true },
            { text: "Indira Gandhi", correct: false },
        ],
    },
    {
        question: "Who is the first lady Prime Minister ?",
        answers: [
            { text: "Khertek Anchimaa-Toka", correct: false },
            { text: "Sirimavo Bandaranaike", correct: false },
            { text: "Indira Gandhi", correct: true },
        ],
    },
    {
        question: "Who was the first woman President of India ?",
        answers: [
            { text: "Savitribai Phule", correct: false },
            { text: "Pratibha Patil", correct: true },
            { text: "Indira Gandhi", correct: false },
        ],
    },
    {
        question: "Who was the first woman I.P.S Officer of India ?",
        answers: [
            { text: "Kiran Bedi", correct: true },
            { text: "Shila Dawre", correct: false },
            { text: "Savitribai Phule", correct: false },
        ],
    },
    {
        question: "Who was the first Prime Minister of India ?",
        answers: [
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Gulzarilal Nanda", correct: false },
            { text: "Robert Walpole", correct: false },
        ],
    },
    {
        question: "Who was the first President of India ?",
        answers: [
            { text: "John Adams", correct: false },
            { text: "George Washington", correct: false },
            { text: "Dr. Rajendra Prasad", correct: true },
        ],
    },
    {
        question: "Who is the first woman to become a doctor ?",
        answers: [
            { text: "Marie Curie", correct: false },
            { text: "Anandibai Gopalrao Joshi", correct: true },
            { text: "Merit Ptah", correct: false },
        ],
    },
    {
        question: "Who was the world's first woman doctor ?",
        answers: [
            { text: "Madeleine Brès", correct: false },
            { text: "Rebecca Lee Crumpler", correct: false },
            { text: "Merit Ptah", correct: true },
        ],
    },
    {
        question: "Who was the first scientist to receive Bharat Ratna ?",
        answers: [
            { text: "C. V. Raman", correct: true },
            { text: "C. Rajagopalachari", correct: false },
            { text: "Sarvepalli Radhakrishnan", correct: false },
        ],
    },
    {
        question: "Who got the 1st Nobel Prize in India ?",
        answers: [
            { text: "Katalin Kariko", correct: false },
            { text: "Rabindranath Tagore", correct: true },
            { text: "Theodor Mommsen", correct: false },
        ],
    },
    {
        question: "Who was the first woman musician to get Bharat Ratna ?",
        answers: [
            { text: "Subbulakshmi", correct: true },
            { text: "Rajkumari Dubey", correct: false },
            { text: "Lata Mangeshkar", correct: false },
        ],
    },
];

startQuiz();

function startQuiz() {
    score = 0;
    questionContainer.style.display = "flex";
    answerButtons.style.display = "flex";
    randomQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    nextButton.classList.remove("hide");
    restartButton.classList.add("hide");
    resultDivision.classList.add("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(randomQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const inputGroup = document.createElement("div");
        inputGroup.classList.add("inputgroup");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.id = "answer" + index;
        radio.name = "answer";
        radio.value = index;

        const label = document.createElement("label");
        label.htmlFor = "answer" + index;
        label.innerText = answer.text;

        inputGroup.appendChild(radio);
        inputGroup.appendChild(label);
        answerButtons.appendChild(inputGroup);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

nextButton.addEventListener("click", () => {
    const answerIndex = Array.from(
        answerButtons.querySelectorAll("input")
    ).findIndex((radio) => radio.checked);
    if (answerIndex !== -1) {
        if (randomQuestions[currentQuestionIndex].answers[answerIndex].correct) {
            score++;
        } else {
            alert(`The answer is: ${randomQuestions[currentQuestionIndex].answers.find(answer => answer.correct).text}`);
        }
        currentQuestionIndex++;
        if (randomQuestions.length > currentQuestionIndex) {
            setNextQuestion();
        } else {
            endQuiz();
        }
    } else {
        alert("Please select an answer!");
    }
});

restartButton.addEventListener("click", startQuiz);

function endQuiz() {
    questionContainer.style.display = "none";
    answerButtons.style.display = "none";
    nextButton.classList.add("hide");
    restartButton.classList.remove("hide");
    resultDivision.classList.remove("hide");
    resultDivision.innerText = `Your Score: ${score} / ${randomQuestions.length}`;
    if (score === randomQuestions.length) {
        resultDivision.innerText = `Your Score: ${score} / ${randomQuestions.length}
        
        Well done !! Keep it up !!`;
    } else if (score > randomQuestions.length - 3) {
        resultDivision.innerText = `Your Score: ${score} / ${randomQuestions.length}
        
        You are almost there !! Keep Trying...`;
    } else {
        resultDivision.innerText = `Your Score: ${score} / ${randomQuestions.length}
        
        Try again...`;
    }
}

