import * as sounds from "./sounds.js"
import { musicControl } from "./controls.js"

export function start () {
  musicControl.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    console.log(action)
  })
}