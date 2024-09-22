const menuContent= document.querySelector('#content');
menuContent.innerHTML=`<h1>This is Menu</h1>`
export { menuContent }
export  function menuData() {



    // Create and append the main content
    const content= document.createElement('div');
    const main = document.createElement('main')
    main.className = 'container'

    const pageTitle = document.createElement('h2')
    pageTitle.className = 'page-title'
    pageTitle.textContent = 'Our Menu'
    main.appendChild(pageTitle)

    const menuSections = [
        {
            title: 'Appetizers',
            items: [
                { name: 'Bruschetta', price: '$8.99', description: 'Toasted bread topped with fresh tomatoes, garlic, and basil.' },
                { name: 'Calamari', price: '$10.99', description: 'Lightly fried squid served with marinara sauce.' }
            ]
        },
        {
            title: 'Main Courses',
            items: [
                { name: 'Grilled Salmon', price: '$18.99', description: 'Fresh salmon fillet grilled to perfection, served with seasonal vegetables.' },
                { name: 'Chicken Parmesan', price: '$16.99', description: 'Breaded chicken breast topped with marinara sauce and melted mozzarella.' }
            ]
        },
        {
            title: 'Desserts',
            items: [
                { name: 'Tiramisu', price: '$7.99', description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.' },
                { name: 'Chocolate Lava Cake', price: '$8.99', description: 'Warm chocolate cake with a gooey center, served with vanilla ice cream.' }
            ]
        }
    ]

    menuSections.forEach(section => {
        const sectionElement = document.createElement('section')
        sectionElement.className = 'menu-section'

        const sectionTitle = document.createElement('h3')
        sectionTitle.textContent = section.title
        sectionElement.appendChild(sectionTitle)

        const menuList = document.createElement('ul')
        menuList.className = 'menu-list'

        section.items.forEach(item => {
            const li = document.createElement('li')

            const nameSpan = document.createElement('span')
            nameSpan.className = 'dish-name'
            nameSpan.textContent = item.name
            li.appendChild(nameSpan)

            const priceSpan = document.createElement('span')
            priceSpan.className = 'dish-price'
            priceSpan.textContent = item.price
            li.appendChild(priceSpan)

            const description = document.createElement('p')
            description.className = 'dish-description'
            description.textContent = item.description
            li.appendChild(description)

            menuList.appendChild(li)
        })

        sectionElement.appendChild(menuList)
        main.appendChild(sectionElement)
    })

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
// console.log(home)