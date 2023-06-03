# Angular Application

This is an Angular application built with Angular 14, Angular Material, Bootstrap 5, and NgRx for state management.

## Features

- Todo App: Allows you to create, update, and delete tasks.
- User Management: Allows you to add and view a list of users.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (version 14)
- Angular CLI (version 14)
- NGRX (version 14)
- JSON Server (for fake JSON API)

## Getting Started

1. Clone the repository:
   git clone https://github.com/ahsan-usman/todo-app-ngrx.git

2. install Dependencies:
   npm install

3. start JSON Server:
   json-server --watch db.json (http://localhost:3000/)

4. ng serve -0

5. http://localhost:4200/

# Application Structure

The application is structured as follows:

- src/app/component: Contains the components for the Todo App, User Management, and other components.
- src/app/ngrx-todo: Contains the NgRx-related files for managing the Todo state.
- src/app/ngrx-user: Contains the NgRx-related files for managing the User state.
- src/app/services: Contains services for making API calls and managing data.
- src/app/model: Contains the data models used in the application.

# Libraries and Frameworks Used

- Angular Material: UI component library for Angular.
- Bootstrap 5: CSS framework for styling the application.
- NgRx: Library for state management in Angular applications.
- Actions: Define actions for state changes.
- Effects: Handle side effects.
- Store: Manage the application state.
- Reducers: Define how the state changes in response to actions.

# For Data

- The application uses a fake JSON server to provide a RESTful API and data.
- The server is started using the db.json file as the database. You can modify the db.json file to add, update, or delete data.

# screenShots for Reference

![My Image](../todo-app-ngrx//src//assets/1.png)