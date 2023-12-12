# Powerpuff Girls TV show App

## Description
* This app was created as a practice project to show a example of what I can throw together quickly (under 24hrs) while incorporating tools I haven't used before.

## To Run:
* npm install
* npm start

## To Test:
* npm run test

## Organization
* Though I believe the directory structure and file names will be self-explanatory, here is a quick breakdown of what is where:
 - `store`: all redux related code
 - `pages`: Parent level components for the 2 required pages
 - `components`: Functional(display) components used by the 2 pages 
 - `shared`: Reusable components which would be leveraged much more for making the styling easier to manage
 - `assets`: Static assets
 - `utils`: For Thunk and test help

## Outstanding issues
* Currently there are very few tests
* A lot of inline styling could be extracted into reusable components and a Theme.
* No CI/CD, would like to set up some git actions for tests.
