import { newActiveTab } from "./index.js"

const currentTab = document.querySelector('#about')
const container = document.querySelector('#content')
const subheader = document.createElement('h3')
subheader.textContent = 'About'

function loadAbout() {
    newActiveTab(currentTab)
    container.appendChild(subheader)
}

export { loadAbout }