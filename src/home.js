import odinImage from "./bg.jpg";

const homeContent= document.querySelector('#content');
homeContent.innerHTML=`<h1>This is Home</h1>`
export  function homeData(contentDiv) {

    // console.log(homeData);
    const content= document.createElement('div');
    // Create and append the main content
    const main = document.createElement('main')
    main.className = 'container'

    const heroSection = document.createElement('section')
    heroSection.className = 'hero'

    const heroTitle = document.createElement('h2')
    heroTitle.textContent = 'Welcome to Tasty Bites'

    const heroParagraph = document.createElement('p')
    heroParagraph.textContent = 'Experience the finest cuisine in town'

    const heroButton = document.createElement('a')
    heroButton.href = ''
    heroButton.className = 'btn'
    heroButton.textContent = 'View Our Menu'

    heroSection.appendChild(heroTitle)
    heroSection.appendChild(heroParagraph)
    heroSection.appendChild(heroButton)
    main.appendChild(heroSection)
    content.appendChild(main)

    // Create and append the footer
    const footer = document.createElement('footer')
    const footerContainer = document.createElement('div')
    footerContainer.className = 'container'

    const footerText = document.createElement('p')
    footerText.textContent = '© 2023 Tasty Bites. All rights reserved.'

    footerContainer.appendChild(footerText)
    footer.appendChild(footerContainer)
    content.appendChild(footer)

    return content.innerHTML
}



// console.log(home)