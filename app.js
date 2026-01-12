const promptElement = document.getElementById("puzzle-prompt");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const feedbackText = document.getElementById("feedback-text");

const [currentPuzzle] = puzzles;

const normalizeAnswer = (value) => value.trim().toLowerCase();

const updateFeedback = (isCorrect) => {
  feedbackText.textContent = isCorrect
    ? "Correct! Great job."
    : "Incorrect. Try again!";
  feedbackText.classList.toggle("correct", isCorrect);
  feedbackText.classList.toggle("incorrect", !isCorrect);
};

const setPrompt = () => {
  if (!currentPuzzle) {
    promptElement.textContent = "No puzzles available.";
    submitButton.disabled = true;
    return;
  }

  promptElement.textContent = currentPuzzle.prompt;
};

const handleSubmit = () => {
  if (!currentPuzzle) {
    return;
  }

  const isCorrect =
    normalizeAnswer(answerInput.value) ===
    normalizeAnswer(currentPuzzle.answer);
  updateFeedback(isCorrect);
};

setPrompt();
submitButton.addEventListener("click", handleSubmit);
answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSubmit();
  }
});
