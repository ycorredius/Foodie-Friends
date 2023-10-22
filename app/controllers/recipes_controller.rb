class RecipesController < ApplicationController
  before_action :set_recipe, only: %i[show update upload_image]
  def index
    @recipes = Recipe.all
  end

  def show
  end

  private

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end
end
