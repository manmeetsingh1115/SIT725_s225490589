var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

const mongoose = require("mongoose");
require("dotenv").config();

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to the MongoDB Atlas database
mongoose.connect(process.env.MONGODB_URI, {
    dbName: "recipeExplorerDB"
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB Atlas");
});

// Define the recipe schema and model
const RecipeSchema = new mongoose.Schema({
    name: String,
    imagePath: String,
    cuisine: String,
    cookingTime: String,
    summary: String
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

// Retrieve recipe data from MongoDB
app.get("/api/recipes", async (req, res) => {
    const recipes = await Recipe.find({});

    res.json({
        statusCode: 200,
        data: recipes,
        message: "Success"
    });
});

// Start the Express server
app.listen(port, () => {
    console.log("App listening on port " + port);
});
