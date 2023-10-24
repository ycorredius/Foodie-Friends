class RecipesController < ApplicationController
  before_action :set_recipe, only: %i[show update upload_image]
  def index
    @pagy, @recipes = pagy(Recipe.all.includes(:categories, :user))
  end

  def show
  end

  private

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end
end
