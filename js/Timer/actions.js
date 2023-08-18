import * as timer from "./timer.js"
import state from "./state.js"
import * as elements from "./elements.js"

export function togglestart () {
  state.isRunning = document.documentElement.classList.toggle("running")
  timer.countdown()
}


export function reset () {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
}

export function increase () {
  let minutes = Number(elements.minutes.textContent)
  minutes = minutes + 5
  timer.updateDisplay(minutes)
}

export function decrease () {  
  let minutes = Number(elements.minutes.textContent)
  if (minutes < 4) {
    minutes = 0
    timer.updateDisplay(minutes)
    return
  }
  minutes = minutes - 5
  timer.updateDisplay(minutes)
}