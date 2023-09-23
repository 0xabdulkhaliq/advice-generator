import { getRandomAdvice } from "./api"
import { instantiate404Prompt } from "./ui"

function instantiateButton() {
  const actionBtn = document.querySelector(".main__action-btn")
  const main = document.querySelector("main")

  const updateDebounce = debounce((mainElement) => {
    getRandomAdvice().finally(() => actionStateModifier(mainElement, "off"))
  })

  actionBtn.addEventListener("click", (e) => {
    if (!navigator.onLine) {
      instantiate404Prompt()
    } else {
      actionStateModifier(main, "on")
      updateDebounce(main)
    }
  })
}

function autoFetchAdviceOnPageLoad() {
  const actionBtn = document.querySelector(".main__action-btn")

  const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  })

  actionBtn.dispatchEvent(clickEvent)
}

function debounce(callback, delay = 1000) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

function actionStateModifier(mainElement, state) {
  state === "on"
    ? mainElement.classList.add("main__action--active")
    : mainElement.classList.remove("main__action--active")
}

export { instantiateButton, autoFetchAdviceOnPageLoad }
