module RecipesHelper
  def recipe_image(recipe)
    if recipe.image.attached?
      recipe.image.variant(:jumbo)
    else
      "/default-food.jpg"
    end
  end
end
