import { loadHome } from "./home.js"
import { loadMenu } from "./menu.js"
import { loadAbout } from "./about.js"
import "./styles.css"

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

homeBtn.addEventListener('click', loadHome)
menuBtn.addEventListener('click', loadMenu)
aboutBtn.addEventListener('click', loadAbout)

function newActiveTab(newTab) {
    const oldTab = document.querySelector('.active')
    oldTab.classList.remove('active')
    newTab.classList.add('active')
    document.querySelector('#content').innerHTML = ''
}

export { newActiveTab }

loadHome()