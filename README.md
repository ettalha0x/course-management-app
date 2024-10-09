# Project Name

This project is a full-stack application built with Next.js for the frontend and Nest.js for the backend, using MongoDB as the database.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Seeding the Database](#seeding-the-database)
- [Stopping the Application](#stopping-the-application)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone (https://github.com/ettalha0x/course-management-app.git)
   cd course-management-app
    ```
2. Navigate to both the backend and frontend directories and install dependencies:

   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
## Running the Application

1. Starting MongoDB
    ```bash
    docker run -d -p 27017:27017 --name mongodb mongo
    ```
2. Start the backend server:

   ```bash
   cd backend
   npm run start:dev
   ```
3. Start the frontend server:

   ```bash
    cd frontend
    npm run dev
    ```
4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Seeding the Database

To seed the database with sample data, run the following command:

   ```bash
    cd backend
    npm run seed
   ```
