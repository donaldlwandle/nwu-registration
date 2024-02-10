
# nwu-registration
#### In the 2nd year BCom Information Systems module for System Analysis and Design Project, our assignment involved the development of an application program. This program is intended to be hosted on a remote server and accessed over the internet via a browser interface. Specifically, it is designed to serve as the North-West University student registration portal, with the following objectives:
#### • Allow students to securely log in to the system.
#### • Facilitate registration for INFS second-year modules, both mainstream and extended stream.
#### • Ensure that there are financial implications associated with continuing the registration process.
#### • Enable students to register in accordance with the guidelines outlined in the yearbook.
#### • Provide functionality for students to input or update their biographical information.
#### • Lastly, generate a proof of registration for students who complete the registration process.


## About the project:
This application was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) as a base.

#### The following Technologies were used:
<img align="left" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
<img align="left" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
<img  src="https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=%ffcc32"/>
<ul>
  <li>React Custom Hooks</li>
  <li>React Context</li>
  <li>React Styled Components</li>
</ul>

## The User Interface:
###### I have built the following pages within this application: sign in, sign up, browse & lastly the homepage. There are four different pages, some using protected routes with auth listeners. I used compound components (just a design pattern) to build my components. The styling is all handled via styled components. Using compound components made my actual dumb components really easy to test.

## Data layer and Business Logic:
###### Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well.

## UI Preview:
<img width="95%" src="https://drive.google.com/uc?export=download&id=18lQbzpPd8oQQuBy78ggQKBTYKunxBkU5"/>
<img width="95%" src="https://drive.google.com/uc?export=download&id=1o-7FXnSx9pgDBFtcFkusw9Gjk-JTa3cw"/>
<img width="95%" src="https://drive.google.com/uc?export=download&id=18WZ2RxVXoQzyc4kpXD4u5HONP5Pxkg73"/>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


