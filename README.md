# Coder's Diray

Using coder's diary you can have all questions solved by you on diffrent platform at one place.Write notes for questions.Track your your progress using heat map and compete with other using leaderboard.

## Live

https://coders-diary.herokuapp.com/

## Features

- Day wise questions solved by you on diffrent platform

  - Used google extension to push data in database when ever user submit question on any coding platform
  - currently have support for geeks for geeks and leetcode

- ## Global leaderboard
  - Leader board that shows top performers based on number of questios solved by them
- ## Users can write and update notes for each questions solved by them
- ## Heatmap that shows no of questions solved by user on each day of year
- ## Chart comparing questions solved by user vs avg submission of last 30 days so that user can compare his performance.

## Run Locally

Clone the project

```bash
git clone https://github.com/shyam0705/coders-diary
```

Go to the project directory

```bash
  cd coders-diary
```

Install dependencies

```bash
  npm install
```

Start app

```bash
  npm start
```

your application will start on port 3000.

## Environment Variables

To run this project, you will need to add your firebase config of databse like this to your .env file

`REACT_APP_apiKey=`

`REACT_APP_authDomain=`

`REACT_APP_databaseURL=`

`REACT_APP_projectId=`

`REACT_APP_storageBucket=`

`REACT_APP_messagingSenderId=`

`REACT_APP_appId=`

## Tech Stack

**React**

**Firebase real-time database**

**Google extension using html,javascript,css**

## Authors

- [@Shyam Patel](https://github.com/shyam0705/InterviewMate)
