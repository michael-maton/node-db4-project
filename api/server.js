const express = require('express');
const Data = require("./data-access");
const server = express();

server.use(express.json());

server.get("/api/recipes/", (req, res) => {
    Data.getRecipes()
        .then((recipes) => {
            res.status(200).json(recipes)
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        })
})
server.get("/api/recipes/:id/shoppingList", (req, res) => {
    Data.getShoppingList(req.params.id)
        .then((list) => {
            res.status(200).json(list)
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        })
})

server.get("/api/recipes/:id/instructions", (req, res) => {
    Data.getInstructions(req.params.id)
        .then((instructions) => {
            res.status(200).json(instructions)
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        })
})

server.get("/api/ingredients/:id/recipes", (req, res) => {
    Data.getRecipesByIngredients(req.params.id)
        .then((recipes) => {
            res.status(200).json(recipes)
        })
        .catch((err) => {
            res.status(500).json({ error: err.message })
        })
})

module.exports = server;
