import { newActiveTab } from "./index.js"

const currentTab = document.querySelector('#about')
const container = document.querySelector('#content')
const subheader = document.createElement('h3')
const about = document.createElement('div')
const info = document.createElement('p')

about.classList = 'about'

subheader.textContent = 'About'
info.textContent = 'Email@email.com | 948-984-5299 | 2821 Geraldine Lane, 10011'

function loadAbout() {
    newActiveTab(currentTab)
    container.appendChild(subheader)
    container.appendChild(about)
    about.appendChild(info)
}

export { loadAbout }