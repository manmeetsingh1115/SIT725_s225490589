# SIT725 Task 5.2C - Books Catalogue using MVC and MongoDB

## Overview

This project is a minimal read-only Books Catalogue built using Node.js, Express, MongoDB, Mongoose and vanilla HTML/CSS/JavaScript.

The application follows the Week 5 MVC structure:

- Routes map API endpoints to controller functions.
- Controllers manage request and response logic.
- Services perform MongoDB queries.
- The Book model defines the MongoDB schema.
- The public client fetches and displays books.

## Book fields

Each book contains:

- id
- title
- author
- year
- genre
- summary
- price stored as MongoDB Decimal128
- currency stored as AUD

## API routes

```text
GET /api/books
GET /api/books/:id