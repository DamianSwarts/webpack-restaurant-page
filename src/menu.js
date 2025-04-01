const menuLoader = () => {
    const container = document.getElementById('content'); // Get the container
    container.innerHTML = ''; // Clear the container

    // Add a class to the body for menu-specific styling
    document.body.className = 'menu-page';

    // Create a heading for the menu
    const menuHeading = document.createElement('h1');
    menuHeading.textContent = 'Our Menu';

    // Create a wrapper for the entire menu
    const menuWrapper = document.createElement('div');
    menuWrapper.className = 'menu-wrapper';

    // Create a wrapper for the main menu sections (Breakfast, Lunch, Dinner)
    const mainSectionsWrapper = document.createElement('div');
    mainSectionsWrapper.className = 'main-sections';

    // Create a wrapper for the Drinks section
    const drinksWrapper = document.createElement('div');
    drinksWrapper.className = 'drinks-section';

    // Menu categories
    const menuSections = [
        {
            title: 'Breakfast',
            items: [
                'Pancakes with Maple Syrup',
                'Classic Eggs Benedict',
                'Avocado Toast',
                'Fruit & Yogurt Parfait',
                'Smoked Salmon Bagel'
            ]
        },
        {
            title: 'Lunch',
            items: [
                'Grilled Chicken Caesar Wrap',
                'Tomato Basil Soup with Grilled Cheese',
                'Quinoa & Kale Salad',
                'Beef Tacos with Pico de Gallo',
                'Spaghetti Carbonara'
            ]
        },
        {
            title: 'Dinner',
            items: [
                'Roasted Herb Chicken with Vegetables',
                'Grilled Salmon with Lemon Butter Sauce',
                'Beef Tenderloin Steak',
                'Vegetable Stir-Fry with Tofu',
                'Mushroom Risotto'
            ]
        }
    ];

    const drinks = [
        'Freshly Brewed Coffee',
        'Iced Caramel Latte',
        'Tropical Mango Smoothie',
        'Lemon Iced Tea',
        'Sparkling Water with Lime'
    ];

    // Populate main sections
    menuSections.forEach(section => {
        const sectionContainer = document.createElement('div');
        sectionContainer.className = 'menu-section';

        const sectionHeading = document.createElement('h2');
        sectionHeading.textContent = section.title;

        const sectionList = document.createElement('ul');
        section.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            sectionList.appendChild(listItem);
        });

        sectionContainer.appendChild(sectionHeading);
        sectionContainer.appendChild(sectionList);
        mainSectionsWrapper.appendChild(sectionContainer);
    });

    // Populate drinks section
    const drinksHeading = document.createElement('h2');
    drinksHeading.textContent = 'Drinks';

    const drinksList = document.createElement('ul');
    drinks.forEach(drink => {
        const listItem = document.createElement('li');
        listItem.textContent = drink;
        drinksList.appendChild(listItem);
    });

    drinksWrapper.appendChild(drinksHeading);
    drinksWrapper.appendChild(drinksList);

    // Append all sections to the menu wrapper
    menuWrapper.appendChild(mainSectionsWrapper);
    menuWrapper.appendChild(drinksWrapper);

    // Append the menu heading and wrapper to the container
    container.appendChild(menuHeading);
    container.appendChild(menuWrapper);
};

export { menuLoader };
