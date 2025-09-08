const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    "Title": String,
    "Description": String,
    "Main Ingredient": String,
    "IngredientList": [String],
    "Instructions": [String], 
    "Sauce": String,
    "Dietary Restrictions": [String],
    "Flavor Profile": [String],
    "Image name": String,
    "Servings": Number,
    "Image URL": String
}, {
    collection: 'recipes_v3'
});

module.exports = mongoose.model('Recipe', recipeSchema); 