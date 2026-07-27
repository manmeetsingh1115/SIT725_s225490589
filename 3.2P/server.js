var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var recipeList = [
    {
        title: "Vegetable Pasta",
        image: "images/vegetable-pasta.jpg",
        link: "About Vegetable Pasta",
        description: "A colourful vegetarian pasta prepared with fresh vegetables, tomato sauce and herbs."
    },
    {
        title: "Chickpea Curry",
        image: "images/chickpea-curry.jpg",
        link: "About Chickpea Curry",
        description: "A flavourful Indian curry prepared with chickpeas, tomatoes and aromatic spices."
    },
    {
        title: "Garden Salad",
        image: "images/garden-salad.jpg",
        link: "About Garden Salad",
        description: "A fresh and healthy salad containing colourful vegetables and a light dressing."
    }
];

app.get("/api/recipes", (req, res) => {
    res.json({
        statusCode: 200,
        data: recipeList,
        message: "Recipes retrieved successfully"
    });
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("App listening to: " + port);
});