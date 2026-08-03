# SIT725 Task 4.2P - Database-Backed Recipe Explorer

This project extends the SIT725 Task 3.2P Recipe Explorer by integrating a MongoDB database using Mongoose. Recipe data is stored in MongoDB Atlas and retrieved through an Express REST API.

## Technologies

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Materialize CSS
- jQuery

## Database Fields

Each recipe contains the following fields:

- name
- imagePath
- cuisine
- cookingTime
- summary

## REST API

The application retrieves recipes using:

GET /api/recipes

## Installation

1. Install the dependencies:

   npm install

2. Create a `.env` file using `.env.example` and add a MongoDB connection string.

3. Populate the database once:

   node seed.js

4. Start the application:

   npm start

5. Open:

   http://localhost:3000