# The project "Portfolio-Website"

### Link to the project:

https://portfolio-website-green-phi.vercel.app/

## About the project

The HTML code is completely written according to the BEM methodology. The issues related to the accessibility of the interface are taken into account.
The color palette changes automatically depending on the user's preferences.

### Functions for Webpage Enhancement

This repository contains a collection of JavaScript functions aimed at enhancing webpage functionality and user experience. Below are brief descriptions of each function:

### Theme Change Functionality

The navbarMoon function enables users to switch between dark and light themes on the webpage. It updates the theme of the webpage and adjusts the SVG image accordingly based on user interaction or system preference.

### Mobile Navigation Toggle

The menuIcon function handles mobile navigation functionality, allowing users to toggle the mobile navigation menu and updating the navigation button icon accordingly. It also toggles the body scroll when the mobile navigation menu is open.

### Animation of the display when scrolling
The animation is set to a global object 
Window adjusts and applies the scrolling display animation to certain elements when they enter the viewport while scrolling. It adds subtle animations to enhance the user experience.

### Initializing the Swiper Carousel
A carousel has been created for the reviews section. Which provides an interactive carousel for displaying popular reviews

## Installation

git clone
https://github.com/SlavaWebDeveloper/Portfolio-Website.git

`npm install`

For local development, use:  
`npm run dev`

To build a project, use:  
`npm run build`

## Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

## File Tree:

└── coach  
    ├── index.html  
    ├── package-lock.json  
    ├── package.json  
    ├── public  
    │   ├── fonts (...)  
    │   └── images (...)  
    ├── README.md  
    ├── src  
    │   ├── js  
    │   │   └── index.js  
    │   └── scss  
    │       ├── _base.scss  
    │       ├── _button.scss  
    │       ├── _fonts.scss  
    │       ├── _media.scss  
    │       ├── _mixin.scss  
    │       ├── _sticky-footer.scss  
    │       ├── _utils.scss  
    │       ├── _varibles.scss  
    │       ├── index.scss  
    │       └── modules  
    │           ├── about.scss  
    │           ├── contact.scss  
    │           ├── footer.scss  
    │           ├── header.scss  
    │           ├── home.scss  
    │           ├── portfolio.scss  
    │           ├── profession.scss  
    │           ├── services.scss  
    │           ├── social.scss  
    │           └── testimonial.scss  
    └── vite.config.js  