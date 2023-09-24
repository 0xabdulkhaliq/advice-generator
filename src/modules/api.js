import { updateAdviceOnUI, instantiate404Prompt } from "./ui"

async function getRandomAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice")

    if (response.ok) {
      const jsonData = await response.json()

      updateAdviceOnUI(jsonData.slip)

      return new Promise((resolve) => setTimeout(resolve, 1500))
    }
    throw new Error()
  } catch (error) {
    instantiate404Prompt()
    return Promise.reject(error)
  }
}

export { getRandomAdvice }
