This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

## Architechture

Project consists of 4 main folders: route, hooks, components and api. 
All api calls a moved to api directory. Hooks folder contains custom React hooks.
Routing is inside route folder.
Components used to display application to front user.

## Components
Application has 2 pages local weather and 5 days forecast. Each page is capable of calling api. In the page state is represented by useState hook, and state changes with useEffect hook. Since application is using only 1 city to display weather, redux store is not used for simplicity. however api call can be easily moved to saga and actions.
Layout is using children prop to display Header on every page. When no data is returned from api, spinner is displayed.

## CSS
CSS is using react modules. Every css file can be scoped to component. That was achieved by eject and modification to webpacj.config

## Variables
All keys are loacted in .env file which is not committed to github. In order to run applicatiion locally add .env file to root with REACT_APP_API_KEY. Assign appropriate value to it from https://openweathermap.org/ project.