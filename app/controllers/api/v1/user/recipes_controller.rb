# frozen_string_literal: true

class Api::V1::User::RecipesController < Api::BaseController
  before_action :set_recipes, only: %i[index]

  def index
    render json: RecipeSerializer.new(@recipes).serialized_json
  end

  private

  def set_recipes
    @recipes = @user.recipes.includes(:recipe_ingredients, :ingredients)
  end
end
