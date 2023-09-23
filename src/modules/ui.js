function instantiate404Prompt() {
  const errorPrompt = document.querySelector(".main__error-prompter")
  errorPrompt.classList.toggle("main__error-prompter--active")

  const fallbackAdvice = {
    id: "404",
    advice:
      "When the Wi-Fi's out, your inner artist can finally come out to play"
  }

  setTimeout(() => {
    updateAdviceOnUI(fallbackAdvice)
    errorPrompt.classList.toggle("main__error-prompter--active")
  }, 4000)
}

function updateAdviceOnUI(generatedAdvice) {
  const adviceId = document.querySelector(".reference__id")
  const advice = document.querySelector(".blockquote__quote")

  adviceId.textContent = generatedAdvice.id
  advice.textContent = generatedAdvice.advice
}

export { updateAdviceOnUI, instantiate404Prompt }
