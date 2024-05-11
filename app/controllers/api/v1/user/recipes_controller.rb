# frozen_string_literal: true

class Api::V1::User::RecipesController < Api::BaseController
  before_action :set_recipes, only: %i[index]

  def index
    render json: RecipeSerializer.new(@recipes).serializable_hash.to_json, cached: true, status: :ok
  end

  private

  def set_recipes
    @recipes = @user.recipes.search(params[:name]).includes(:recipe_ingredients, :ingredients)
  end
end
