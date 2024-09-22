const aboutContent= document.querySelector('#content');
aboutContent.innerHTML=`<h1>This is AboutPage</h1>`
export  function aboutData() {

    const content= document.createElement('div');

    // Create and append the main content
    const main = document.createElement('main')
    main.className = 'container'

    const pageTitle = document.createElement('h2')
    pageTitle.className = 'page-title'
    pageTitle.textContent = 'About Tasty Bites'
    main.appendChild(pageTitle)

    const aboutContent = document.createElement('section')
    aboutContent.className = 'about-content'


    // const aboutImage = document.createElement('img')
    // aboutImage.src = '../placeholder.svg'
    // aboutImage.alt = 'Tasty Bites Restaurant'
    // aboutImage.className = 'about-image'
    // aboutContent.appendChild(aboutImage)

    const aboutText = document.createElement('div')
    aboutText.className = 'about-text'

    const sections = [
        {
            title: 'Our Story',
            content: 'Tasty Bites was founded in 2010 with a simple mission: to serve delicious, high-quality food in a welcoming atmosphere. Our passion for culinary excellence and customer satisfaction has made us a beloved part of the community.'
        },
        {
            title: 'Our Philosophy',
            content: 'We believe in using fresh, locally-sourced ingredients to create memorable dining experiences. Our talented chefs combine traditional recipes with innovative techniques to bring you the best flavors from around the world.'
        },
        {
            title: 'Our Team',
            content: 'Led by head chef Maria Rodriguez, our team of dedicated professionals works tirelessly to ensure that every dish that leaves our kitchen meets our high standards. We\'re not just colleagues - we\'re a family united by our love for great food.'
        }
    ]

    sections.forEach(section => {
        const h3 = document.createElement('h3')
        h3.textContent = section.title
        aboutText.appendChild(h3)

        const p = document.createElement('p')
        p.textContent = section.content
        aboutText.appendChild(p)
    })

    aboutContent.appendChild(aboutText)
    main.appendChild(aboutContent)

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