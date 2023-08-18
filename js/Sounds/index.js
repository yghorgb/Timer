import * as sounds from "./sounds.js"
import * as controls from "./controls.js"
import state from "./state.js"

export function toggleMusic () {
  controls.musicControl.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    
    if (typeof sounds[action] != 'object'){
      return
    }

    const button = document.querySelector(`[data-action="${action}"]`)

    const musicButtons = Array.from(controls.musicControl.children)
    const playingMusics = musicButtons.filter((control) => control.classList.contains('music-on'))

    for (const playingMusic of playingMusics) {
      playingMusic.classList.remove('music-on')
      playingMusic.classList.add('music-off')
      sounds[playingMusic.dataset.action].pause()
      state.isMute = true
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
