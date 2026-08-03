const mongoose = require("mongoose");
require("dotenv").config();

// Connect to the MongoDB Atlas database
mongoose.connect(process.env.MONGODB_URI, {
    dbName: "recipeExplorerDB"
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB Atlas");
});

// Define the same schema used in server.js
const RecipeSchema = new mongoose.Schema({
    name: String,
    imagePath: String,
    cuisine: String,
    cookingTime: String,
    summary: String
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

// Original Recipe Explorer sample data
const sampleRecipe1 = new Recipe({
    name: "Vegetable Pasta",
    imagePath: "images/vegetable-pasta.jpg",
    cuisine: "Italian",
    cookingTime: "30 minutes",
    summary:
        "A colourful vegetarian pasta prepared with fresh vegetables, tomato sauce and herbs."
});

const sampleRecipe2 = new Recipe({
    name: "Chickpea Curry",
    imagePath: "images/chickpea-curry.jpg",
    cuisine: "Indian",
    cookingTime: "40 minutes",
    summary:
        "A flavourful chickpea curry prepared with tomatoes and aromatic Indian spices."
});

const sampleRecipe3 = new Recipe({
    name: "Garden Salad",
    imagePath: "images/garden-salad.jpg",
    cuisine: "International",
    cookingTime: "15 minutes",
    summary:
        "A fresh and healthy salad containing colourful vegetables and a light dressing."
});

// Save the sample recipes in MongoDB
Promise.all([
    sampleRecipe1.save(),
    sampleRecipe2.save(),
    sampleRecipe3.save()
])
    .then(() => {
        console.log("Sample recipes saved successfully");
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error("Unable to save sample recipes:", error.message);
        mongoose.connection.close();
    });