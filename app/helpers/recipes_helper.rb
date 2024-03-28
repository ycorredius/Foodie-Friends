module RecipesHelper
  def recipe_image(recipe)
    if recipe.image.blob.present? 
      recipe.image.blob
    else
      "/default-food.jpg"
    end
  end
end
