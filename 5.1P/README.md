# SIT725 5.1P - Books Catalog using MVC

This project is a minimal read-only Books catalog built with Node.js, Express, and vanilla HTML/CSS/JavaScript. It follows the MVC separation and client fetch flow required by Task 5.1P.

## MVC structure

```text
controllers/books.controller.js  HTTP request and response handling
routes/books.routes.js           Route mappings only
services/books.service.js        In-memory data and lookup functions
public/index.html                Browser view and inline fetch/render flow
public/styles.css               Vanilla CSS presentation styles
server.js                        Express setup and route mounting
```

The service contains the required in-memory array and acts as the data layer for this task. A controller `index.js`, MongoDB model, and seed script are intentionally not included: the Week 5 prac assigns the `index.js` example to Task 5.2P and the database section to Task 5.3C.

## Run locally

1. Install Node.js 18 or newer.
2. Open a terminal in this project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open <http://localhost:3000>.

## Verify the required routes

Open these URLs in a browser or use `curl`:

```bash
curl http://localhost:3000/api/books
curl http://localhost:3000/api/books/b1
curl -i http://localhost:3000/api/books/not-found
```

Expected results:

- `/api/books` returns a response whose `data` property contains exactly five books.
- `/api/books/b1` returns *The Three-Body Problem* in the response's `data` property.
- An unknown ID returns HTTP `404`, `data: null`, and `message: "Book not found"`.
- The home page displays a list of five books, each showing only the title and author.

## Fast submission checklist

1. Run the app and verify the home page plus both API routes.
2. Take clear screenshots of:
   - the terminal showing the running server;
   - the home page showing all five books;
   - `/api/books` showing the five JSON records;
   - `/api/books/b1` showing one JSON record.
3. Create a public or accessible GitHub repository following the Task 1.1P naming and commit rules.
4. Push this project without `node_modules`.
5. Clone the repository into a different folder, run `npm install` and `npm start`, and confirm it still works.
6. Put your name, student ID, repository link, and labelled screenshots into a document.
7. Export that evidence document as PDF.
8. Open the exported PDF once to confirm the screenshots and repository link are readable.
9. Upload the evidence PDF to OnTrack and submit the repository link.

## Git commands

Replace the repository URL with your own:

```bash
git init
git add .
git commit -m "Complete SIT725 Task 5.1P Books MVC app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```
