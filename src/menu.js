import { newActiveTab } from "./index.js"

const currentTab = document.querySelector('#menu')
const container = document.querySelector('#content')
const subheader = document.createElement('h3')
const menu = document.createElement('div')

menu.classList = 'menu'
subheader.textContent = 'Menu'

class menuItem {
    constructor(image, title, description, price) {
        this.image = image
        this.title = title
        this.description = description
        this.price = price
    }
}

const list = []
// Creating dishes to display
for (let i = 0; i < 5; i++) {
    list.push(new menuItem(`Dish Image`, `Dish Title #${list.length + 1}`, `Dish description here`, 0))
}

function loadMenu() {
    newActiveTab(currentTab)
    container.appendChild(subheader)
    container.appendChild(menu)
    menu.innerHTML = ''

    for (let i = 0; i < list.length; i++) {
        const menuitem = document.createElement('div')
        const title = document.createElement('h4')
        const desc = document.createElement('p')
        const img = document.createElement('div')

        menuitem.classList = 'menu-item'
        title.textContent = list[i].title
        desc.textContent = list[i].description
        img.classList = 'image'
        img.textContent = list[i].image

        menu.appendChild(menuitem)
        menuitem.appendChild(img)
        menuitem.appendChild(title)
        menuitem.appendChild(desc)
    }
}

export { loadMenu }