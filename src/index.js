
import {hello} from "./inti";
import {aboutData} from "./about";
import {menuData} from "./menu";
import {homeData} from "./home";



// console.log(hello);

const home= document.querySelector("#home");
const menu= document.querySelector("#menu");
const about= document.querySelector("#about");



const body = document.body
body.innerHTML = '' // Clear any existing content
// Create and append the nav
const nav = document.createElement('nav')
const content_div = document.createElement('div')
content_div.setAttribute('id','content')
const navContainer = document.createElement('div')
navContainer.className = 'container'


const logo = document.createElement('h1')
logo.className = 'logo'
logo.textContent = 'Tasty Bites'

const navLinks = document.createElement('ul')
navLinks.className = 'nav-links'

const navItems = [
    { text: 'Home', href: 'index.html', active: true },
    { text: 'Menu', href: 'menu.html' },
    { text: 'About', href: 'about.html' }
]

navItems.forEach(item => {
    const li = document.createElement('li')
    const button_link = document.createElement('button')
    button_link.textContent = item.text
    button_link.setAttribute('id', item.text)
    if (item.active) button_link.className = 'active'
    li.appendChild(button_link)
    navLinks.appendChild(li)
})

navContainer.appendChild(logo)
navContainer.appendChild(navLinks)
nav.appendChild(navContainer)
body.appendChild(nav)
body.appendChild(content_div)

//loading the default content
content_div.innerHTML=homeData()
navLinks.addEventListener("click", function(e){
    const target= e.target;
    // console.log(target.id)
    content_div.innerHTML=''
    switch(target.id){
        case "Home":
            // console.log(target.id)
            content_div.innerHTML=homeData()
            // console.log(content.textContent)
            break;

        case "Menu":
            // import ('./content.js');
            // content.innerHTML=menuContent.innerHTML
            content_div.innerHTML=menuData()
            // console.log(target.id)

            break;

        case "About":
            content_div.innerHTML=aboutData()
            // console.log(target.id)
            break;

    }
})
document.onload = function() {
}