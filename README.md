# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

###########



# Project Title

De Project is de Eind Opdracht voor de study. Waar Ik moet een reponsive cross-platform web applicatie bouwen met de react, Java Script, CSS en HTML technologie.

Scenario:

In deze tijd waar mensen zijn bezig met klimaatverandering het is niet makkelijk om beslissing te nemen voor onze activiteit in het buiten lucht. Want niemand weet wat voor weer het zou komen. Krijgen we regen of zon? Wat zijn de verwachtingen van het weer in de week? Met een goed antwoord over de vraag kan mensen hun activiteit goed plannen of mensen kunnen zichzelf voorbereiden om te reizen voor hun activiteit of thuis te blijven.
Om dit vragen te beantwoorden?
Ik wil een applicatie ontwikkelen die aangeeft in de verschillende steden in Nederland het weer. En met behulp van een map hoe ze kunnen hun bestemming in een andere stad waar het weer goed is voor hun activiteit.

https://github.com/gkarm/weatherplus

## Authors

- [@gkarm](https://github.com/gkarm)


## API Reference

#### Current weather data
#### Access current weather data for any location on Earth! We collect and process weather data from different sources such as global and local weather models, satellites, radars and a vast network of weather stations. Data is available in JSON, XML, or HTML format.

```http: 
FROM: https://openweathermap.org

  GET https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=metric 

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `b8a5b939482c713ddb5f0c28ee6c2dd6`    |Read Above




#### Firebase from google.nl
Authentication -Login and registration

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key`      | `AIzaSyBVX93gULe-SqTISGQNlhrz8TX2HYFu4Tk` | Authentication and login to fetch |

SDK setup and configuration : $ npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBVX93gULe-SqTISGQNlhrz8TX2HYFu4Tk",
authDomain: "weatherplus-51c48.firebaseapp.com",
projectId: "weatherplus-51c48",
storageBucket: "weatherplus-51c48.appspot.com",
messagingSenderId: "962047294014",
appId: "1:962047294014:web:e3d070ccf0fa12a2916f6f",
measurementId: "G-DQ1HZNGJS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




## Link to figma
https://www.figma.com/file/2sMplAOWoSRxy80at9QJxD/WeatherPlusApp?type=design&node-id=4%3A76&mode=design&t=ZkOOHajUMyinBzlA-1


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```

## Lessons Learned



Before accessing the app to search for the forecast. User need to login.
If no account then user need to register an account. Registration is done using email and password.
With react router technologie and navigate after a succefull registration user is taken automatically to the login page where he or she can log in the system.
After a succefull login , user can access the app with the search bar.
user can then search for a city and the app will display the result with the forcast.
with the wind and humidity.

You Have a react , Java Script , CSS and Html technologie to have a responsive web application using 2 api.
- open weather api
  and
- google firebase api.

Open weather api give the current weather forecast and
google firebase for the authentication and login. 

