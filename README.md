# Horror Films Frontend v1.0.2

The idea of making this web app was creating fancy looking custom styled React App using Horror Films Backend API for learning purpose.

<br>

## Live

**Live:** https://horror-films.airm.ct8.pl/

<br>

## Horror Films Backend Resources

**Github:** https://github.com/airfortech/horror-films-backend


<br>

## Tech Stack

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
<br>

## Additional Main Packages

@tippyjs/react
https://www.npmjs.com/package/@tippyjs/react

@vime/react
https://www.npmjs.com/package/@vime/react

gsap
https://www.npmjs.com/package/gsap

react-headless-pagination
https://www.npmjs.com/package/react-headless-pagination

react-image-lightbox
https://www.npmjs.com/package/react-image-lightbox

swiper
https://www.npmjs.com/package/swiper

<br>

## Project Structure
    app
    │   config.js
    │   .env
    │   .env.example
    ├───controllers
    │   └───api
    ├───db
    │   ├───data
    │   │       films.json
    │   ├───models
    │   └───tools
    ├───helpers
    └───routes

<br>

## Install Packages

    npm install

<br>

## Configure Project

`/app/.env` file
- rename `.env.example` file to `.env`,
- get API key from https://www.themoviedb.org/documentation/api, creating an account and provide it in  `.env` file
- provide your mongo database url in `.env` file

`/app/config.js` file
- `frontEndHost: "http://localhost:3000"` - url for cors
- `resultsPerPage: 12` - results per page provided by API
- `languagesToFetch: ["en", "pl"]` - you can specify in array films languages you want to store in your database
- `yearFrom: 2000` - year you start gathering films from
- ` yearTo: 2022` - year you end gathering films
- `genre: 27` - films genre you want to store in database (more in tools section)

<br>

## Tools
