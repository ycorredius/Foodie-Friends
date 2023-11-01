module RecipesHelper
  def recipe_image(recipe)
    unless recipe.image.nil?
      recipe.image.attached? ? recipe.blob : recipe.avatar
    else
      "/default.jpg"
    end
  end
end
