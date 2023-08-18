import * as sounds from "./sounds.js"
import * as controls from "./controls.js"
import state from "./state.js"

export function toggleMusic () {
  controls.musicControl.addEventListener('click', (event) => {
    const action = event.target.dataset.action

    const button = document.querySelector(`[data-action="${action}"]`)
    
    if (typeof sounds[action] != 'object'){
      return
    }

    if (!state.isMute) {
      sounds[action].pause()
      state.isMute = true
      button.classList.toggle("music-on")
      button.classList.toggle("music-off")
      return
    }

    sounds[action].play()
    state.isMute = false
    button.classList.toggle("music-off")
    button.classList.toggle("music-on")
  })
}