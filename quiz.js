const questions = [
    {
        question: "What is the pH value of a neutral solution?",
        answers: [ 
            { text: "0", correct: false},
            { text: "7", correct: true},
            { text: "14", correct: false},
            { text: "1", correct: false},
        ],
        info: "A neutral solution has a pH of 7 because, at 25°C, pure water has equal concentrations of H⁺ and OH⁻ ions (both 1.0 × 10⁻⁷ M), and pH = -log[H⁺] = 7.",
    },
    {
        question: "What is the formula to calculate pH?",
        answers: [ 
            { text: "pH = −log[H⁺]", correct: true},
            { text: "pH = log[H⁺]", correct: false},
            { text: "pH = log[OH⁻]", correct: false},
            { text: "pH = −log[OH⁻]", correct: false},
        ],
        info: "The pH of a solution is calculated using the formula pH = -log[H⁺], where [H⁺] represents the concentration of hydrogen ions in moles per liter. This logarithmic scale helps measure acidity and alkalinity, where a lower pH means a stronger acid and a higher pH means a stronger base.",
    },
    {
        question: "A solution with a pH of 8 is considered:",
        answers: [ 
            { text: "Acidic", correct: false},
            { text: "Neutral", correct: false},
            { text: "Basic", correct: true},
            { text: "Strongly acidic", correct: false},
        ],
        info: "The pH scale ranges from 0 to 14, where pH < 7 is acidic, pH = 7 is neutral, and pH > 7 is basic. Since pH 8 is greater than 7, the solution is considered basic",
    },
    {
        question: "If the [OH−][OH^-][OH−] concentration increases, what happens to the pH?",
        answers: [ 
            { text: "Increases", correct: true},
            { text: "Decreases", correct: false},
            { text: "Stays the same", correct: false},
            { text: "Doubles", correct: false},
        ],
        info: "The pH and OH⁻ concentration are related through the equation pH + pOH = 14. If the OH⁻ (hydroxide ion) concentration increases, the pOH decreases, leading to an increase in pH, making the solution more basic.",
    },
    {
        question: "Which of the following is a strong acid?",
        answers: [ 
            { text: "H₂O", correct: false},
            { text: "NaOH", correct: false},
            { text: "HCl", correct: true},
            { text: "NH₃", correct: false},
        ],
        info: "HCl (hydrochloric acid) is a strong acid, meaning it completely dissociates into H⁺ ions in solution. Other substances like NaOH (a base), H₂O (neutral), and NH₃ (a weak base) do not act as strong acids.",
    },
    {
        question: "A basic solution is diluted with water. What happens to its pH?",
        answers: [ 
            { text: "Increases", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stays the same", correct: false},
            { text: "Becomes acidic", correct: false},
        ],
        info: "When a basic solution is diluted with water, the concentration of OH⁻ ions decreases, making the solution less basic. Since pH measures basicity in bases, a decrease in OH⁻ concentration results in a decrease in pH.",
    },
    {
        question: "Which of the following is a strong acid?",
        answers: [ 
            { text: "Milk", correct: false},
            { text: "Black coffee", correct: false},
            { text: "Orange juice", correct: false},
            { text: "Battery acid", correct: true},
        ],
        info: "Battery acid (typically sulfuric acid, H₂SO₄) is a strong acid that completely dissociates in water, producing a very low pH. Other substances like milk, black coffee, and orange juice are only weakly acidic.",
    },
    {
        question: "What is the [OH⁻] concentration in a solution with pOH = 4?",
        answers: [ 
            { text: "1 × 10⁻⁴ M", correct: true},
            { text: "4 × 10⁻¹ M", correct: false},
            { text: "1 × 10⁻¹⁰ M", correct: false},
            { text: "1 × 10⁻⁷ M", correct: false},
        ],
        info: "The pOH is related to the hydroxide ion concentration by the formula [OH⁻] = 10⁻ᵖᴼᴴ. If pOH = 4, then [OH⁻] = 10⁻⁴ M.",
    },
    {
        question: "What is the main characteristic of a base?",
        answers: [ 
            { text: "Tastes sour", correct: false},
            { text: "Produces H⁺ ions in solution", correct: false},
            { text: "Feels slippery and tastes bitter", correct: true},
            { text: "Turns blue litmus paper red", correct: false},
        ],
        info: "Bases are known for their bitter taste and slippery texture, which is why substances like soap feel smooth on the skin. These properties are due to the presence of hydroxide ions in basic solutions.",
    },
    {
        question: "Adding an acid to a solution causes its pH to:",
        answers: [ 
            { text: "Increase", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stay the same", correct: false},
            { text: "Becomes neutral", correct: false},
        ],
        info: "Acids increase the hydrogen ion concentration, which lowers the pH of the solution.",
    },
    {
        question: "A solution changes from pH 5 to pH 3. What happens to the acidity?",
        answers: [ 
            { text: "Increase", correct: true},
            { text: "Decreases", correct: false},
            { text: "Stay the same", correct: false},
            { text: "Becomes neutral", correct: false},
        ],
        info: "Since pH is logarithmic, a drop of two pH units means the acidity increases by 100 times. A lower pH indicates a higher concentration of H⁺ ions.",
    },
    {
        question: "The pH of human blood is approximately:",
        answers: [ 
            { text: "2", correct: false},
            { text: "10", correct: false},
            { text: "7.4", correct: true},
            { text: "5", correct: false},
        ],
        info: "Human blood has a slightly basic pH of around 7.4, which is necessary for proper physiological function. If blood pH deviates too much from this range, it can lead to serious health issues.",
    },
    {
        question: "Which of the following is an example of a weak base",
        answers: [ 
            { text: "NaOH", correct: false},
            { text: "NH₃", correct: true},
            { text: "KOH", correct: false},
            { text: "HCl", correct: false},
        ],
        info: "Ammonia (NH₃) is a weak base because it only partially accepts hydrogen ions in solution. In contrast, strong bases like NaOH completely dissociate in water to produce hydroxide ions.",
    },
    {
        question: "What is the pH of a solution with [H⁺] = 1 × 10⁻¹¹ M?",
        answers: [ 
            { text: "3", correct: false},
            { text: "5", correct: false},
            { text: "11", correct: true},
            { text: "9", correct: false},
        ],
        info: "pH is calculated using pH = -log[H⁺]. For [H⁺] = 1 × 10⁻¹¹ M, the pH is 11, indicating a basic solution.",
    },
    {
        question: "What happens to the pH of a solution when an acid is added?",
        answers: [ 
            { text: "Increases", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stays the same", correct: false},
            { text: "Becomes neutral", correct: false},
        ],
        info: "Adding an acid increases the concentration of H⁺ ions, which lowers the pH, making the solution more acidic.",
    },
    {
        question: "If [OH⁻] is 1 × 10⁻⁹ M, what is the pH?",
        answers: [ 
            { text: "5", correct: false},
            { text: "9", correct: false},
            { text: "12", correct: true},
            { text: "7", correct: false},
        ],
        info: "Since pH + pOH = 14, first calculate pOH = -log(1 × 10⁻⁹) = 9. Then, pH = 14 - 9 = 5, indicating a slightly acidic solution.",
    },
    {
        question: "What color does red litmus paper turn in a base?",
        answers: [ 
            { text: "Red", correct: false},
            { text: "Green", correct: false},
            { text: "Blue", correct: true},
            { text: "Yellow", correct: false},
        ],
        info: "Red litmus paper turns blue in the presence of a base because bases increase the hydroxide ion concentration, altering the chemical composition of the litmus dye.",
    },
    {
        question: "If the pOH increases from 5 to 9, what happens to the pH?",
        answers: [ 
            { text: "Increases", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stays constant", correct: false},
            { text: "Becomes neutral", correct: false},
        ],
        info: "Since pH+pOH=14, an increase in pOH means a decrease in pH. If pOH rises from 5 to 9, the pH drops from 9 to 5, making the solution more acidic.",
    },
    {
        question: "What is the pH of pure water?",
        answers: [ 
            { text: "0", correct: false},
            { text: "7", correct: true},
            { text: "14", correct: false},
            { text: "10", correct: false},
        ],
        info: "Pure water is neutral with a pH of 7. This is because the concentration of H⁺ and OH⁻ ions is equal at 1 × 10⁻⁷ M each.",
    },
    {
        question: "Which formula is used to calculate [OH⁻] from pOH?",
        answers: [ 
            { text: "[OH⁻] = 10⁻ᵖᴴ", correct: false},
            { text: "[OH⁻] = pOH × 10", correct: false},
            { text: "[OH⁻] = pOH ÷ 10", correct: false},
            { text: "[OH⁻] = 10⁻ᵖᴼᴴ", correct: true},
        ],
        info: "[OH⁻] can be calculated using [OH⁻] = 10⁻ᵖᴼᴴ. This equation helps determine the hydroxide ion concentration in a solution.",
    },
    {
        question: "Which of the following is a property of acids?",
        answers: [ 
            { text: "Bitter taste", correct: false},
            { text: "Feels slippery", correct: false},
            { text: "Reacts with metals to produce hydrogen gas", correct: true},
            { text: "Turns blue litmus paper blue", correct: false},
        ],
        info: "Acids react with certain metals, such as zinc and magnesium, to release hydrogen gas. This is a characteristic reaction of acids with active metals.",
    },
    {
        question: "If the [H⁺] concentration is 1 × 10⁻⁵ M, what is the pH?",
        answers: [ 
            { text: "2", correct: false},
            { text: "5", correct: true},
            { text: "7", correct: false},
            { text: "10", correct: false},
        ],
        info: "The pH is calculated using 𝑝𝐻=−log⁡[𝐻⁺]. Since [𝐻⁺]=10⁻⁵ , the pH is 5, making the solution acidic.",
    },
    {
        question: "Which of the following has a pH below 7?",
        answers: [ 
            { text: "Ammonia", correct: false},
            { text: "Bleach", correct: false},
            { text: "Lemon juice", correct: true},
            { text: "Baking soda", correct: false},
        ],
        info: "Lemon juice is acidic due to the presence of citric acid, giving it a pH below 7. Substances with a pH below 7 are classified as acids.",
    },
    {
        question: "What is the pH of a strong acid like hydrochloric acid (HCl)?",
        answers: [ 
            { text: "1", correct: true},
            { text: "5", correct: false},
            { text: "7", correct: false},
            { text: "10", correct: false},
        ],
        info: "Strong acids, such as hydrochloric acid, have very low pH values, often around 1, because they fully ionize in solution, releasing a high concentration of hydrogen ions.",
    },    
    {
        question: "What happens to the pH of a solution when an acid is added?",
        answers: [ 
            { text: "Increases", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stays the same", correct: false},
            { text: "Turns neutral", correct: false},
        ],
        info: "Adding an acid increases the hydrogen ion concentration [𝐻⁺], lowering the pH and making the solution more acidic.",
    },
    {
        question: "If a solution has a pH of 2, what is its [OH⁻] concentration?",
        answers: [ 
            { text: "1 × 10⁻¹² M", correct: true},
            { text: "1 × 10⁻² M", correct: false},
            { text: "1 × 10⁻⁷ M", correct: false},
            { text: "1 × 10⁻⁵ M", correct: false},
        ],
        info: "The relationship between pH and pOH is 𝑝𝐻+𝑝𝑂𝐻=14. Since pH is 2, pOH is 12. Using [OH⁻]]=10−𝑝𝑂𝐻, we find [OH⁻]=10⁻¹² M.",
    },
    {
        question: "When a solution becomes more acidic, how does its pH change?",
        answers: [ 
            { text: "Increases", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stays constant", correct: false},
            { text: "Becomes neutral", correct: false},
        ],
        info: "A solution becomes more acidic as the hydrogen ion concentration increases, which results in a lower pH value.",
    },
    {
        question: "The concentration of hydroxide ions [OH⁻] in pure water is:",
        answers: [ 
            { text: "1 × 10⁻⁷ M", correct: true},
            { text: "1 × 10⁻¹⁴ M", correct: false},
            { text: "1 × 10⁻³ M", correct: false},
            { text: "1 × 10⁻¹⁰ M", correct: false},
        ],
        info: "At 25°C, pure water has [OH⁻] = 1 × 10⁻⁷ M, making it neutral (pH 7).",
    },    
    {
        question: "What does a pH of 2 indicate?",
        answers: [ 
            { text: "Strong acid", correct: true},
            { text: "Weak acid", correct: false},
            { text: "Neutral solution", correct: false},
            { text: "Strong base", correct: false},
        ],
        info: "A pH of 2 signifies a highly acidic solution, which is characteristic of strong acids such as hydrochloric acid or sulfuric acid.",
    },
    {
        question: "When an acidic solution is diluted with water, what happens to the [H⁺][H⁺][H⁺] concentration?",
        answers: [ 
            { text: "Increases", correct: false},
            { text: "Decreases", correct: true},
            { text: "Stays the same", correct: false},
            { text: "Becomes neutral", correct: false},
        ],
        info: "Dilution with water reduces the concentration of hydrogen ions [H⁺], causing the solution to become less acidic.",
    },
    {
        question: "If [H⁺] is 1 × 10⁻⁹ M, what is the [OH⁻]?",
        answers: [ 
            { text: "1 × 10⁻⁴ M", correct: false},
            { text: "1 × 10⁻⁵ M", correct: true},
            { text: "1 × 10⁻⁷ M", correct: false},
            { text: "1 × 10⁻⁹ M", correct: false},
        ],
        info: "The relationship between [H⁺] and [OH⁻] is given by the water ion product: [H⁺] × [OH⁻] = 1 × 10⁻¹⁴. Given [H⁺] = 1 × 10⁻⁹ M, we solve for [OH⁻]: (1 × 10⁻⁹) × [OH⁻] = 1 × 10⁻¹⁴, so [OH⁻] = 1 × 10⁻⁵ M.",
    },
    {
        question: "A solution with a pH of 13 is considered:",
        answers: [ 
            { text: "Weakly acidic", correct: false},
            { text: "Strongly acidic", correct: false},
            { text: "Weakly basic", correct: false},
            { text: "Strongly basic", correct: true},
        ],
        info: "A pH of 13 indicates a very basic solution, meaning it has a high concentration of hydroxide ions [OH⁻].",
    },
    {
        question: "If [OH⁻] = 1 × 10⁻⁶ M, what is the pOH?",
        answers: [ 
            { text: "3", correct: false},
            { text: "6", correct: true},
            { text: "8", correct: false},
            { text: "10", correct: false},
        ],
        info: "The pOH is calculated as 𝑝𝑂𝐻=−log[OH⁻] Since [OH⁻]=10⁻⁶, the pOH is 6.",
    },
    {
        question: "A substance is added, and the pH drops from 10 to 6. What happens to the [H⁺][H⁺][H⁺] concentration?",
        answers: [ 
            { text: "Increases 10 times", correct: false},
            { text: "Decreases 10 times", correct: false},
            { text: "Increases 1000 times", correct: true},
            { text: "Stays the same", correct: false},
        ],
        info: "Each pH unit drop increases [H⁺] by 10 times, so a drop of 4 units results in a 1000-fold increase.",
    },
    {
        question: "What is the pH range of basic solutions?",
        answers: [ 
            { text: "0-7", correct: false},
            { text: "7-14", correct: true},
            { text: "1-6", correct: false},
            { text: "5-10", correct: false},
        ],
        info: "Basic solutions have a pH greater than 7 and up to 14, meaning they contain more hydroxide ions than hydrogen ions.",
    },
    {
        question: "What is the pH of milk?",
        answers: [ 
            { text: "Around 6.5", correct: true},
            { text: "Around 9", correct: false},
            { text: "Around 12", correct: false},
            { text: "Around 4", correct: false},
        ],
        info: "Milk has a slightly acidic pH of about 6.5 due to the presence of lactic acid. It is close to neutral but still slightly below 7.",
    },
    {
        question: "If the pH of a solution drops from 9 to 5, what happens to the [H⁺][H⁺][H⁺] concentration?",
        answers: [ 
            { text: "Increases 100 times", correct: false},
            { text: "Decreases 100 times", correct: false},
            { text: "Increases 10,000 times", correct: true},
            { text: "Stays constant", correct: false},
        ],
        info: "Each pH unit represents a tenfold change in [H⁺], so a drop of 4 units increases [H⁺] by 10⁴ (10,000 times)",
    },
    {
        question: "If the pH decreases from 6 to 4, how does the [H⁺][H⁺][H⁺] concentration change?",
        answers: [ 
            { text: "Increases 10 times", correct: false},
            { text: "Decreases 10 times", correct: false},
            { text: "Increases 100 times", correct: true},
            { text: "Stays the same", correct: false},
        ],
        info: "Each pH unit change equals a tenfold shift in [H⁺], so a drop of 2 units increases [H⁺] by 100 times.",
    },
    {
        question: "What happens when a base is added to an acidic solution?",
        answers: [ 
            { text: "The pH increases", correct: true},
            { text: "The pH decreases", correct: false},
            { text: "The pH remains the same", correct: false},
            { text: "It turns red", correct: false},
        ],
        info: "Adding a base neutralizes some of the hydrogen ions, reducing acidity and increasing the pH.",
    },
    {
        question: "Which of these is a household base?",
        answers: [ 
            { text: "Lemon juice", correct: false},
            { text: "Baking soda", correct: true},
            { text: "Vinegar", correct: false},
            { text: "Orange Juice", correct: false},
        ],
        info: "Baking soda (sodium bicarbonate) is a weak base commonly used in cooking and cleaning. It can neutralize acids and has a pH above 7.",
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const info = document.getElementById("info");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    info.style.display = "none";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    info.innerHTML = "";
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    let currentQuestion = questions[currentQuestionIndex];
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    
    if (currentQuestion.info) {
        showInfo(currentQuestion.info);
    }
    nextButton.style.display = "block";
}

function showInfo(infoText) {
    info.innerHTML = infoText;
    info.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
