import { newActiveTab } from "./index.js"

const currentTab = document.querySelector('#menu')
const container = document.querySelector('#content')
const div = document.createElement('div')
const header = document.createElement('h3')
div.classList.add('menu')
header.textContent = 'Menu'

function loadMenu() {
    newActiveTab(currentTab)
    container.appendChild(div)
    div.appendChild(header)
}

export { loadMenu }