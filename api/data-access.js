const db = require('../data/db-config.js');


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipesByIngredients
}

function getRecipes() {
    return db("recipes")
}
function getShoppingList(recipe_id) {
    return db("recipe_ingredients as r")
        .join("ingredients as i", "r.ingredient_id", "i.ingredient_id")
        .where("recipe_id", recipe_id)
        .select("ingredient_name as Ingredient", "quantity as Quantity")
}
function getInstructions(recipe_id) {
    return db("instructions as i")
        .join("recipes as r", "i.recipe_id", "r.recipe_id")
        .where("r.recipe_id", recipe_id)
        .select("step_number as Step", "instruction_text as Instruction")
        .orderBy("step_number")
}
function getRecipesByIngredients(ingredient_id) {
    return db("recipe_ingredients as i")
        .join("recipes as r", "i.recipe_id", "r.recipe_id")
        .where("i.ingredient_id", ingredient_id)
        .select("recipe_name as Recipe")
}