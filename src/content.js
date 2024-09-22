
const header= document.createElement("header");
const nav=document.createElement("nav");
const title=document.createElement("h2");
const butnNameArray=[
    'Home',
    'Menu',
    'About',
]

const nacArray=[];
document.body.appendChild(header);
header.classList.add('topnav')
title.classList.add('title');
title.textContent = localStorage.getItem("title");
header.appendChild(title)

for (let i = 0; i <3 ; i++) {
    const button = document.createElement("button");
    button.innerText = butnNameArray[i]
    button.classList.add("button");
    button.setAttribute('id',butnNameArray[i])
    header.appendChild(button);
}
const div1 = document.createElement("div");
div1.setAttribute("id", 'content');

div1.style.backgroundColor ='green';
document.body.appendChild(div1);









