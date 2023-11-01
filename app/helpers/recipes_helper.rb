module RecipesHelper
  def recipe_image(recipe)
    if recipe.image.blob.present? || recipe.avatar.present?
      recipe.image.attached? ? recipe.image.blob : recipe.avatar
    else
      "/default-food.jpg"
    end
  end
end
