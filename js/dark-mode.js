const btnToggle = document.querySelector("#toggle-mode")

btnToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle("dark-mode")
})