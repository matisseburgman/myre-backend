const express = require('express');
const Recipe = require('./models/Recipe');
const router = express.Router();

// Get random recipe
router.get('/recipes/random', async (req, res) => {
    try {
        const foodType = req.query.food_type;
        let query = {};
        
        if (foodType) {
            query['food_type'] = foodType;
        }

        const recipe = await Recipe.aggregate([
            { $match: query },
            { $sample: { size: 1 } }
        ]);
        
        if (recipe.length > 0) {
            res.json(recipe[0]);
        } else {
            res.status(404).json({ message: "No recipes found" });
        }
    } catch (error) {
        console.error('Error fetching random recipe:', error);
        res.status(500).json({ message: "Error fetching random recipe" });
    }
});

module.exports = router;
