

localStorage.setItem('title','JavaScriptCookingSpot')
localStorage.setItem('greetings','This is Your Ist node via javascript webpacks')

// const bod= document.querySelector('.body')
const div = document.createElement("div");
div.classList.add("restaurant-page");
// console.log(bod);
document.body.appendChild(div);

const p=document.createElement("p")
p.textContent = localStorage.getItem("greetings");
div.appendChild(p);