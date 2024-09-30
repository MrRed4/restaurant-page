import { newActiveTab } from "./index.js"

const currentTab = document.querySelector('#home')
const container = document.querySelector('#content')

function loadHome() {
    newActiveTab(currentTab)
}

export { loadHome }