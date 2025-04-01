const aboutLoader = () => {
    const container = document.getElementById('content'); // Get the container

    document.body.className = 'about-page';

    // Clear the container
    container.innerHTML = '';

    // Create heading and paragraphs
    const aboutHeading = document.createElement('h1');
    aboutHeading.textContent = 'About Us';

    const aboutParagraph1 = document.createElement('p');
    aboutParagraph1.textContent = "Welcome to Bite Me! - the place where flavor bites back! Our mission is to serve mouthwatering dishes that tantalize your taste buds and leave you craving more.";

    const aboutParagraph2 = document.createElement('p');
    aboutParagraph2.textContent = "At Bite Me!, we pride ourselves on sourcing the freshest, highest-quality ingredients to create a menu that's as diverse as our passion for food. Whether it's a quick bite or a hearty meal, we aim to deliver unforgettable culinary experiences.";

    const aboutParagraph3 = document.createElement('p');
    aboutParagraph3.textContent = "Come join us in celebrating good food, great company, and unforgettable memories. We can't wait to serve you!";

    const aboutParagraph4 = document.createElement('p');
    aboutParagraph4.textContent = "Founded in 2023, Bite Me! started with a simple goal: to revolutionize the dining experience. Our team of talented chefs and friendly staff is dedicated to bringing creativity and excellence to every plate. From bold flavors to impeccable service, we strive to make every visit special.";

    const aboutParagraph5 = document.createElement('p');
    aboutParagraph5.textContent = "We're not just about food; we're about the moments that bring people together. Bite Me! is your go-to spot for celebrations, casual meals, and everything in between.";

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = 'Contact Us';

    const contactPhone = document.createElement('p');
    contactPhone.textContent = 'Phone: +1 (555) 123-4567';

    const contactEmail = document.createElement('p');
    contactEmail.textContent = 'Email: info@biteme.com';

    // Append content to the container
    container.appendChild(aboutHeading);
    container.appendChild(aboutParagraph1);
    container.appendChild(aboutParagraph2);
    container.appendChild(aboutParagraph3);
    container.appendChild(aboutParagraph4);
    container.appendChild(aboutParagraph5);
    container.appendChild(contactHeading);
    container.appendChild(contactPhone);
    container.appendChild(contactEmail);
};

export { aboutLoader };
