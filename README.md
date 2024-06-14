# Weather
### Contents
- [Contents](#contents)
- [Project Description](#project-description)
- [Features](#features)
- [Project structure](#project-structure)
- [Services and Libraries](#services-and-libraries)

### Project Description
This project is the weather website.

The main goal of this project is to provide a convenient platform for viewing the current weather, providing up-to-date information on temperature, precipitation, humidity, wind speed and other weather conditions in real time for a selected location.

### Features
+ Clean and simple interface: Easy to understand and use.
+ Responsive design: The project is optimized for different devices and screen sizes.
+ Provides advice on what to wear based on weather conditions.

### Project structure 
List of files and directories in the project:
```css
Poject/
├── index.html
├── img/
├── styles/
│   ├── style.scss
│   ├── style.css
│   └── style.css.map
├── main.js
└── README.md
```
+ __index.html__/ Main HTML page.
+ __styles__/ Catalog for CSS files.
  + __style.scss__: Main style file written in SCSS (Sass).
  + __style.css__: Main style file compiled from SCSS.
  + __style.css.map__: A source map file that helps keep track of styles in the original SCSS file while debugging.
+ __main.js__/ Main scripts file.
+ __img__/ Catalog for images
+ __README.md__/ Project documentation.
### Services and Libraries
+ __[jquery](https://jquery.com/)__ - is a lightweight JavaScript library for easy interaction with HTML documents and event handling on websites.
+ __[Weather API](https://openweathermap.org/api)__ - is an interface that allows you to get current weather information, forecasts and other weather data.
+ __[Axios](https://axios-http.com/docs/intro)__ - is a popular JavaScript library for making HTTP requests that works both client-side and server-side. It supports promises and asynchronous operations, which makes it easier to work with the API.
+ __[Country Flags API](https://flagsapi.com/)__ - is an interface that provides access to images of the national flags of various countries, allowing applications to query and use these images to display the flags in their interfaces.