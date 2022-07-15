# Horror Films Frontend v1.0.2

The idea of making this web app was creating fancy looking custom styled React App using Horror Films Backend API for learning purpose.

<br>

## Live

**Live:** https://horror-films.airm.ct8.pl/

<br>

## Horror Films Backend Resources

**Github:** https://github.com/airfortech/horror-films-backend


<br>

## Screenshot

![Preview](/res/opera_7CVCGUQRug.png)

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
    src
    ├───assets
    │   ├───images
    │   └───music
    ├───components
    │   ├───FilmDetails
    │   │   ├───Gallery
    │   │   │   ├───Modal
    │   │   │   └───Picture
    │   │   ├───Header
    │   │   ├───People
    │   │   ├───PersonInfo
    │   │   └───VideoPlayer
    │   ├───FilmsList
    │   │   ├───Pagination
    │   │   └───Slider
    │   │       └───Card
    │   ├───Footer
    │   ├───Header
    │   │   ├───LanguageSwitcher
    │   │   └───Search
    │   │       ├───Switcher
    │   │       └───SwitcherIcon
    │   ├───HOCs
    │   │   └───FadeOutEdges
    │   ├───MusicPlayer
    │   └───Tooltip
    ├───context
    │   └───LanguageContext
    ├───effects
    │   ├───bats
    │   └───Fog
    ├───languages
    ├───tools
    └───views
        ├───FilmsView
        ├───FilmView
        ├───NoResultsView
        ├───NotFoundView
        └───ServerErrorView

<br>

## Install Packages

    npm install

<br>

## Configure Project

`/src/variables.js` file. Important variables:

API Url:
```js
export const apiDomain = "http://localhost:3001/api";
```

Default search params:
```js
export const getFilmsUrlParams =
  "title=&page=1&sort_type=descending&sort_by=release_date";
```

Number of items you want to get:
```js
export const getFilmUrlParams = {
  backdrops: 20,
  posters: 6,
  cast: 14,
};
```

Play music in background at start (`true` not supported in some browsers)
```js
export const musicPlayerDefaultState = true;
```

<br>

## Run Project

Development mode:

    npm start

Build Production app:

    npm run build