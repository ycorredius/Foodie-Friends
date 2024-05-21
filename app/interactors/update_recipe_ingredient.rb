class UpdateRecipeIngredient
  def perform(recipe, recipe_ingredient)
    if recipe_ingredient["_destroy"] == "1"
      RecipeIngredient.find(recipe_ingredient["id"]).destroy
    else
      ingredient = Ingredient.find_or_create_by(name: recipe_ingredient["name"])
      updated_recipe_ingredient = RecipeIngredient.find(recipe_ingredient["id"])
      updated_recipe_ingredient.update(quantity: recipe_ingredient["quantity"],
        unit: recipe_ingredient["unit"], recipe: recipe, ingredient: ingredient)
      Result.new(recipe_ingredient)
    end
  end

  class Result
    attr_reader :recipe_ingredient
    def initialize(recipe_ingredient)
      @recipe_ingredient = recipe_ingredient
    end

    def created?
      @recipe_ingredient.valid? && @recipe_ingredient.persisted?
    end

    def errors
      return {} if created?

      @recipe_ingredient.errors
    end
  end
end
