import { newActiveTab } from "./index.js"

const currentTab = document.querySelector('#home')
const container = document.querySelector('#content')
const div = document.createElement('div')
const header = document.createElement('h3')
div.classList.add('home')
header.textContent = 'Restaurant Website'

function loadHome() {
    newActiveTab(currentTab)
    container.appendChild(div)
    div.appendChild(header)
}

export { loadHome }