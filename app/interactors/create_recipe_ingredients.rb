class CreateRecipeIngredients
  def perform(recipe, recipe_ingredient)
    ingredient = Ingredient.find_or_create_by(name: recipe_ingredient['name'])
    recipe_ingredient = RecipeIngredient.create(quantity: recipe_ingredient['quantity'],
                                                unit: recipe_ingredient['unit'], recipe:, ingredient:)
    Result.new(recipe_ingredient)
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
