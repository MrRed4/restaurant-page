import { newActiveTab } from "./index.js"

const currentTab = document.querySelector('#about')
const container = document.querySelector('#content')
const div = document.createElement('div')
const header = document.createElement('h3')
div.classList.add('about')
header.textContent = 'About'

function loadAbout() {
    newActiveTab(currentTab)
    container.appendChild(div)
    div.appendChild(header)
}

export { loadAbout }