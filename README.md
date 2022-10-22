<h1 align="center">Exercise Tracker</h1>

<h3 align="center">A web application that lets users record exercises, allowing them to better track their workouts.</h3>


## About

This project utilizes the MERN stack to write as Single Page Application that tracks exercises completed by the use. I used React for the front-end UI application, and wrote my own REST API using Node and Express for the back-end web service. MongoDB was used for persistence.

## Goals and Requirements

The goal of this assignment was to showcase the skills I learned in my CS 290 Web Development course. The requirements were as follows:

* Implement a REST API that supports CRUD operations
    * This required the implementation of `POST`, `GET`, `PUT`, and `DELETE` endpoints
        * These endpoints all required explicitly written response codes, as well as request validation when appropriate
    * The model code was separate from the controller code

* Implement a React front-end with the following three pages
    1. Home Page
    2. Edit Exercise Page
    3. Create Exercise Page

* React Components are function based, class based components not allowed

* Custom HTML must include the following design features
    * A select element must be used to provide options for selecting the value of units in the Edit Exercises and Create Exercises pages
    * Semantic page layout tags are required in the App.js file, and must include at least the following
        * The `<header>` tag must include a heading level 1 tage to specify the app's name, and a paragraph that describes it
        * The `<footer>` tag must include the student's name in a copyright statement
        * These tags must be present on all three pages
    * All three pages must have links to the Home Page and the Create Exercises Page using a React component
        * This component must use the _Nav_ tag and the link component from `react-router-dom`
        * This component must be added in `App.js` before the routes
        
* Custom CSS must be implemented


## Learning Outcomes

* The typical use of frequently used HTTP methods
* The use of HTTP response status codes
* The Express API for HTTP requests and responses
* How to implement REST APIs using Express
* The lifecycle of a React component
* React hooks
* Fetch API


## Installation

1. Unzip exercises-rest and exercises-ui
2. Navigate to the root directory of each
3. Run `npm install` and `npm start` in both root directories
4. Open `localhost:8000` to see the web application

## Project Status
This project was completed on June 3rd, 2022 and received full points

## Credits
This project was completed for Oregon State University's CS 290 Web Development course in June of 2022


