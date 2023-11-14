const toggleBtn = document.querySelector('#theme-toggle')
let isDark = false
const sunIconPath = "../img/sun-icon.svg"
const moonIconPath = "../img/moon-icon.svg"

toggleBtn.addEventListener("click", () => {
    const body = document.querySelector('body')
    body.classList.toggle('dark')
    body.classList.contains('dark') ? isDark = true : isDark = false
    const toggleIcon = document.querySelector('#theme-toggle-icon')
    toggleIcon.src= isDark ? sunIconPath : moonIconPath
})