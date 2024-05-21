class AddRecipeIngredients
  def initialize(recipe, ingredients)
    @recipe = recipe
    @ingredients = ingredients
    @result = Result.new
  end

  def perform
    return unless @ingredients

    @ingredients.each do |ingredient|
      @result << (if ingredient[1].key?('id')
                    UpdateRecipeIngredient.new.perform(@recipe,
                                                       ingredient[1])
                  else
                    CreateRecipeIngredients.new.perform(
                      @recipe, ingredient[1]
                    )
                  end)
    end
    @result
  end

  class Result
    attr_reader :recipe_ingredient

    def initialize
      @created_recipe_ingredient = []
    end

    def <<(result)
      @created_recipe_ingredient << result
    end

    def errors
      @created_recipe_ingredient.map(&:errors).flatten.uniq
    end

    def success?
      @created_recipe_ingredient.all?(&:created?)
    end

    def created?
      @recipe_ingredient.valid? && @recipe_ingredient.persisted?
    end
  end
end
