const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/add", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const sum = a + b;

    res.json({ result: sum });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});