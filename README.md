# Webpack Restaurant Page

## Overview
This project is a simple restaurant page created using **Webpack**. The goal of this project was to learn and implement new Webpack concepts to create a modular, dynamic, and scalable web application. Through this project, I explored concepts such as:

- Using Webpack for bundling JavaScript modules.
- Configuring Webpack plugins for optimized builds.
- Managing assets like images and fonts using loaders.
- Creating modular components for dynamic content rendering.
- Implementing `npm` scripts for building and running the application.

The restaurant page features a homepage, menu section, and an about page, all dynamically generated using JavaScript.

---

## Features
- **Modular Design**: The content is dynamically created using JavaScript modules, ensuring clean and maintainable code.
- **Webpack Integration**: Webpack is configured to bundle JavaScript, CSS, and image assets efficiently..
- **Custom Assets**: The project includes custom images, handled seamlessly using Webpack loaders.

---

## Getting Started

Follow these steps to set up the project on your local machine:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (including `npm`)
- Git

---

### Clone the Repository
Open your terminal and run:
   ```bash
   git clone https://github.com/DamianSwarts/webpack-restaurant-page.git
```
Navigate into the project folder:
```bash
cd webpack-restaurant-page
```
Install the required npm packages by running:
```bash
npm install
```
To bundle the assets and generate the dist folder, run:

```bash
npm run build
```
Start a local development server:

```bash
npm start
```
Open your browser and go to http://localhost:8080.

This project is deployed using GitHub Pages. The gh-pages branch hosts the content of the dist folder, which includes the bundled files for the application.
