const questions = [
    {
        question: "What is the pH value of a neutral solution?",
        answers: [ 
            { text: "0", correct: false},
            { text: "7", correct: true},
            { text: "14", correct: false},
            { text: "1", correct: false},
        ]
    },
    {
        question: "What is the formula to calculate pH?",
        answers: [ 
            { text: "pH = −log[H⁺]", correct: true},
            { text: "pH = log[H⁺]", correct: false},
            { text: "pH = log[OH⁻]", correct: false},
            { text: "pH = −log[OH⁻]", correct: false},
        ]
    },
    {
        question: "A solution with a pH of 8 is considered:",
        answers: [ 
            { text: "Acidic", correct: false},
            { text: "Neutral", correct: false},
            { text: "Basic", correct: true},
            { text: "Strongly acidic", correct: false},
        ]
    },
    {
        question: "If the [OH−][OH^-][OH−] concentration increases, what happens to the pH?",
        answers: [ 
            { text: "Increases", correct: true},
            { text: "Decreases", correct: false},
            { text: "Stays the same", correct: false},
            { text: "Doubles", correct: false},
        ]
    },
    {
        question: "Which of the following is a strong acid?",
        answers: [ 
            { text: "H₂O", correct: false},
            { text: "NaOH", correct: false},
            { text: "HCl", correct: true},
            { text: "NH₃", correct: false},
        ]
    },
    {
        question: "A basic solution is diluted with water. What happens to its pH?",
        answers: [ 
            { text: "Increases", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stays the same", correct: false},
            { text: "Becomes acidic", correct: false},
        ]
    },
    {
        question: "Which of the following is a strong acid?",
        answers: [ 
            { text: "Milk", correct: false},
            { text: "Black coffee", correct: false},
            { text: "Orange juice", correct: false},
            { text: "Battery acid", correct: true},
        ]
    },
    {
        question: "What is the [OH⁻] concentration in a solution with pOH = 4?",
        answers: [ 
            { text: "1 × 10⁻⁴ M", correct: true},
            { text: "4 × 10⁻¹ M", correct: false},
            { text: "1 × 10⁻¹⁰ M", correct: false},
            { text: "1 × 10⁻⁷ M", correct: false},
        ]
    },
    {
        question: "What is the main characteristic of a base?",
        answers: [ 
            { text: "Tastes sour", correct: false},
            { text: "Produces H⁺ ions in solution", correct: false},
            { text: "Feels slippery and tastes bitter", correct: true},
            { text: "Turns blue litmus paper red", correct: false},
        ]
    },
    {
        question: "Adding an acid to a solution causes its pH to:",
        answers: [ 
            { text: "Increase", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stay the same", correct: false},
            { text: "Becomes neutral", correct: false},
        ]
    },
    {
        question: "A solution changes from pH 5 to pH 3. What happens to the acidity?",
        answers: [ 
            { text: "Increase", correct: true},
            { text: "Decreases", correct: false},
            { text: "Stay the same", correct: false},
            { text: "Becomes neutral", correct: false},
        ]
    },
    {
        question: "The pH of human blood is approximately:",
        answers: [ 
            { text: "2", correct: false},
            { text: "10", correct: false},
            { text: "7.4", correct: true},
            { text: "5", correct: false},
        ]
    },
    {
        question: "Which of the following is an example of a weak base",
        answers: [ 
            { text: "NaOH", correct: false},
            { text: "NH₃", correct: true},
            { text: "KOH", correct: false},
            { text: "HCl", correct: false},
        ]
    },
    {
        question: "What is the pH of a solution with [H⁺] = 1 × 10⁻¹¹ M?",
        answers: [ 
            { text: "3", correct: false},
            { text: "5", correct: false},
            { text: "11", correct: true},
            { text: "9", correct: false},
        ]
    },
    {
        question: "What happens to the pH of a solution when an acid is added?",
        answers: [ 
            { text: "Increases", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stays the same", correct: false},
            { text: "Becomes neutral", correct: false},
        ]
    },
    {
        question: "If [OH⁻] is 1 × 10⁻⁹ M, what is the pH?",
        answers: [ 
            { text: "5", correct: false},
            { text: "9", correct: false},
            { text: "12", correct: true},
            { text: "7", correct: false},
        ]
    },
    {
        question: "What color does red litmus paper turn in a base?",
        answers: [ 
            { text: "Red", correct: false},
            { text: "Green", correct: false},
            { text: "Blue", correct: true},
            { text: "Yellow", correct: false},
        ]
    },
    {
        question: "If the pOH increases from 5 to 9, what happens to the pH?",
        answers: [ 
            { text: "Increases", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stays constant", correct: false},
            { text: "Becomes neutral", correct: false},
        ]
    },
    {
        question: "What is the pH of pure water?",
        answers: [ 
            { text: "0", correct: false},
            { text: "7", correct: true},
            { text: "14", correct: false},
            { text: "10", correct: false},
        ]
    },
    {
        question: "Which formula is used to calculate [OH⁻] from pOH?",
        answers: [ 
            { text: "[OH⁻] = 10⁻ᵖᴴ", correct: false},
            { text: "[OH⁻] = pOH × 10", correct: false},
            { text: "[OH⁻] = pOH ÷ 10", correct: false},
            { text: "[OH⁻] = 10⁻ᵖᴼᴴ", correct: true},
        ]
    },
    {
        question: "Which of the following is a property of acids?",
        answers: [ 
            { text: "Bitter taste", correct: false},
            { text: "Feels slippery", correct: false},
            { text: "Reacts with metals to produce hydrogen gas", correct: true},
            { text: "Turns blue litmus paper blue", correct: false},
        ]
    },
    {
        question: "If the [H⁺] concentration is 1 × 10⁻⁵ M, what is the pH?",
        answers: [ 
            { text: "2", correct: false},
            { text: "5", correct: true},
            { text: "7", correct: false},
            { text: "10", correct: false},
        ]
    },
    {
        question: "Which of the following has a pH below 7?",
        answers: [ 
            { text: "Ammonia", correct: false},
            { text: "Bleach", correct: false},
            { text: "Lemon juice", correct: true},
            { text: "Baking soda", correct: false},
        ]
    },
    {
        question: "What is the pH of a strong acid like hydrochloric acid (HCl)?",
        answers: [ 
            { text: "1", correct: true},
            { text: "5", correct: false},
            { text: "7", correct: false},
            { text: "10", correct: false},
        ]
    },    
    {
        question: "What happens to the pH of a solution when an acid is added?",
        answers: [ 
            { text: "Increases", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stays the same", correct: false},
            { text: "Turns neutral", correct: false},
        ]
    },
    {
        question: "If a solution has a pH of 2, what is its [OH⁻] concentration?",
        answers: [ 
            { text: "1 × 10⁻¹² M", correct: true},
            { text: "1 × 10⁻² M", correct: false},
            { text: "1 × 10⁻⁷ M", correct: false},
            { text: "1 × 10⁻⁵ M", correct: false},
        ]
    },
    {
        question: "When a solution becomes more acidic, how does its pH change?",
        answers: [ 
            { text: "Increases", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stays constant", correct: false},
            { text: "Becomes neutral", correct: false},
        ]
    },
    {
        question: "The concentration of hydroxide ions [OH⁻] in pure water is:",
        answers: [ 
            { text: "1 × 10⁻⁷ M", correct: true},
            { text: "1 × 10⁻¹⁴ M", correct: false},
            { text: "1 × 10⁻³ M", correct: false},
            { text: "1 × 10⁻¹⁰ M", correct: false},
        ]
    },    
    {
        question: "What does a pH of 2 indicate?",
        answers: [ 
            { text: "Strong acid", correct: true},
            { text: "Weak acid", correct: false},
            { text: "Neutral solution", correct: false},
            { text: "Strong base", correct: false},
        ]
    },
    {
        question: "When an acidic solution is diluted with water, what happens to the [H+][H^+][H+] concentration?",
        answers: [ 
            { text: "Increases", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stays the same", correct: false},
            { text: "Becomes neutral", correct: false},
        ]
    },
    {
        question: "If [H⁺] is 1 × 10⁻⁹ M, what is the [OH⁻]?",
        answers: [ 
            { text: "1 × 10⁻⁴ M", correct: false},
            { text: "1 × 10⁻⁵ M", correct: true},
            { text: "1 × 10⁻⁷ M", correct: false},
            { text: "1 × 10⁻⁹ M", correct: false},
        ]
    },
    {
        question: "A solution with a pH of 13 is considered:",
        answers: [ 
            { text: "Weakly acidic", correct: false},
            { text: "Strongly acidic", correct: false},
            { text: "Weakly basic", correct: false},
            { text: "Strongly basic", correct: true},
        ]
    },
    {
        question: "If [OH⁻] = 1 × 10⁻⁶ M, what is the pOH?",
        answers: [ 
            { text: "3", correct: false},
            { text: "6", correct: true},
            { text: "8", correct: false},
            { text: "10", correct: false},
        ]
    },
    {
        question: "A substance is added, and the pH drops from 10 to 6. What happens to the [H+][H^+][H+] concentration?",
        answers: [ 
            { text: "Increases 10 times", correct: false},
            { text: "Decreases 10 times", correct: false},
            { text: "Increases 1000 times", correct: true},
            { text: "Stays the same", correct: false},
        ]
    },
    {
        question: "What is the pH range of basic solutions?",
        answers: [ 
            { text: "0-7", correct: false},
            { text: "7-14", correct: true},
            { text: "1-6", correct: false},
            { text: "5-10", correct: false},
        ]
    },
    {
        question: "What is the pH of milk?",
        answers: [ 
            { text: "Around 6.5", correct: true},
            { text: "Around 9", correct: false},
            { text: "Around 12", correct: false},
            { text: "Around 4", correct: false},
        ]
    },
    {
        question: "f the pH of a solution drops from 9 to 5, what happens to the [H+][H^+][H+] concentration?",
        answers: [ 
            { text: "Increases 100 times", correct: false},
            { text: "Decreases 100 times", correct: false},
            { text: "Increases 10,000 times", correct: true},
            { text: "Stays constant", correct: false},
        ]
    },
    {
        question: "If the pH decreases from 6 to 4, how does the [H+][H^+][H+] concentration change?",
        answers: [ 
            { text: "Increases 10 times", correct: false},
            { text: "Decreases 10 times", correct: false},
            { text: "Increases 100 times", correct: true},
            { text: "Stays the same", correct: false},
        ]
    },
    {
        question: "What happens when a base is added to an acidic solution?",
        answers: [ 
            { text: "The pH increases", correct: true},
            { text: "The pH decreases", correct: false},
            { text: "The pH remains the same", correct: false},
            { text: "It turns red", correct: false},
        ]
    },
    {
        question: "Which of these is a household base?",
        answers: [ 
            { text: "Lemon juice", correct: false},
            { text: "Baking soda", correct: true},
            { text: "Vinegar", correct: false},
            { text: "Oracge Juice", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentquestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next'
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button")
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();