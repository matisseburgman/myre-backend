router.get('/recipes/random', async (req, res) => {
    try {
        const recipe = await Recipe.aggregate([
            { $sample: { size: 1 } } // Geen $match nodig voor alle recepten
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
