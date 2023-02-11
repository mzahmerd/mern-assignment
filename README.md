# mern-assignment

# To setup on your local machine follow these steps.

- clone this repository on your local machine and make sure you have node.js installed
- cd into the project folder by running `cd mern-assignment` in your terminal
- run `npm install ` to install backend dependencies
- run `cd frontend`
- run `npm install` to install frontend dependencies
- run `cd ..` to go back to the project folder
- run `touch .env` to create .env file and create the following variables and replace the values with your own.
    - MONGO_URL=< your mongodb url >
    - JWT_SECRET=< your jwt token string >
    - JWT_EXPIRE=30d // you can change this according to your need, 30d means 30 days
- run `npm run dev` to start both backend and frontend using concurrently.
- open http://localhost:3000 in your browser.