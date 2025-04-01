//Import the images needed
/*import image1 from "./images/homepage/blueberries.jpg";*/
import { menuLoader } from "./menu.js";
import { aboutLoader } from "./about.js";

// Module to fill the page with content
const home = () => {
    // Get the nav and div elements
    const nav = document.getElementById('navigation');
    const container = document.getElementById('content');
    document.body.className = 'homepage';

    // Fill the nav and div elements with content
    let homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';

    let menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu'

    let aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'About';

    let columnOne = document.createElement('div');
    columnOne.classList.add('imgDiv');
    columnOne.classList.add('col-one');
    container.appendChild(columnOne);

    let columnTwo = document.createElement('div');
    columnTwo.classList.add('imgDiv');
    columnTwo.classList.add('col-two');

    let beverageRow = document.createElement('div');
    beverageRow.classList.add('beverage-row');
    columnTwo.appendChild(beverageRow);

    container.appendChild(columnTwo);

    let intro = document.createElement('p');
    intro.classList.add('intro');

    const welcome = document.createElement('h6');
    welcome.textContent = 'Welcome to';

    const heading = document.createElement('h1');
    heading.textContent = 'Bite Me!';

    const span = document.createElement('span');
    span.textContent = `At Bite Me!,`;

    const firstSentence = document.createTextNode(' we believe food should be an experience');

    // Create a line break
    const lineBreak = document.createElement('br');

    // Create the second part of the sentence
    const secondSentence = document.createTextNode('—something that excites your taste buds, lifts your mood, and challenges the ordinary.');

    const description = document.createElement('p');
    const ul = document.createElement('ul');
    const ulItems = [
        '- Unforgettable Flavors: Every dish we serve is designed to wow you. Think bold spices, daring combinations, and perfectly crafted bites.',
        '- Energetic Atmosphere: With a vibe as sassy as our name, we keep things lively and fun so every visit feels like a party.',
        "- Fresh Ingredients: We don't cut corners when it comes to quality. Every ingredient is fresh, vibrant, and chosen with care." 
    ]
    
    ulItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });

    description.textContent = 'What Makes Us Different',
    description.appendChild(ul);

    // Append the parts to the paragraph
    intro.appendChild(welcome);
    intro.appendChild(heading);
    intro.appendChild(span);
    intro.appendChild(firstSentence);
    //intro.appendChild(lineBreak);
    intro.appendChild(secondSentence);
    intro.appendChild(description);

    columnTwo.appendChild(intro);
    
    let columnThree = document.createElement('div');
    columnThree.classList.add('imgDiv');
    columnThree.classList.add('col-three');
    container.appendChild(columnThree);

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(aboutBtn);

    const importOne = (r) => r.keys().map(r);
    const colOne = importOne(require.context('./images/homepage/column-one', false, /\.(png|jpe?g|svg)$/));

    colOne.forEach(src => {
        const image = document.createElement("img");
        image.src = src;
        columnOne.appendChild(image);
    });

    const importTwo = (r) => r.keys().map(r);
    const colTwo = importTwo(require.context('./images/homepage/column-two', false, /\.(png|jpe?g|svg)$/));

    colTwo.forEach(src => {
        const image = document.createElement("img");
        image.classList.add('beverage');
        image.src = src;
        beverageRow.appendChild(image);
    });

    const importThree = (r) => r.keys().map(r);
    const colThree = importThree(require.context('./images/homepage/column-three', false, /\.(png|jpe?g|svg)$/));

    colThree.forEach(src => {
        const image = document.createElement("img");
        image.src = src;
        columnThree.appendChild(image);
    });

    homeBtn.onclick = function() {
        container.innerHTML = '';
        nav.innerHTML = '';
        home();
    };

    menuBtn.onclick = function() {
        menuLoader();
    };

    aboutBtn.onclick = function() {
        aboutLoader();
    };
};

export { home }


/*let intro = document.createElement('p');
intro.textContent = `At Bite Me!, we believe food should be an experience—something that excites your taste buds, lifts your mood, and challenges the ordinary. 
Whether you're here to grab a quick bite or settle in for a feast, we've got the flavors and flair to satisfy your cravings.`;

let description = document.createElement('p');
description.textContent = `What Makes Us Different
- Unforgettable Flavors: Every dish we serve is designed to wow you. Think bold spices, daring combinations, and perfectly crafted bites.
- Energetic Atmosphere: With a vibe as sassy as our name, we keep things lively and fun so every visit feels like a party.
- Fresh Ingredients: We don't cut corners when it comes to quality. Every ingredient is fresh, vibrant, and chosen with care.  
`

container.appendChild(headingTwo);
container.appendChild(intro);
container.appendChild(description);*/
