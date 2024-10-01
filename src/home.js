import { newActiveTab } from "./index.js"

const currentTab = document.querySelector('#home')
const container = document.querySelector('#content')
const home = document.createElement('div')
const homeimg = document.createElement('div')
const homeinfo = document.createElement('div')
const welcome = document.createElement('h2')
const info = document.createElement('p')

homeimg.classList = 'home-image'
home.classList = 'home'
homeinfo.classList = 'home-info'

homeimg.textContent = 'Image'
welcome.textContent = 'Welcome'
info.textContent = 'Maecenas facilisis nec ligula non dictum. Suspendisse potenti. Integer et semper dui. Curabitur nec interdum purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut efficitur odio eu sapien dictum placerat. Praesent vitae sem pharetra, volutpat diam vel, porta dolor. Nulla ac leo et erat semper semper. Curabitur ut erat scelerisque, tristique velit at, dignissim metus.'

function loadHome() {
    newActiveTab(currentTab)
    container.appendChild(home)
    home.appendChild(homeimg)
    home.appendChild(homeinfo)
    homeinfo.appendChild(welcome)
    homeinfo.appendChild(info)
}

export { loadHome }