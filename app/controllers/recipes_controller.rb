class RecipesController < ApplicationController
  before_action :set_recipe, only: %i[show update edit update]
  def index
    @pagy, @recipes = pagy(Recipe.all.includes(:categories, :user))
  end

  def show
  end

  def new
    @recipe = Recipe.new
  end

  def edit
  end

  def update
    categories = params[:recipe][:categories].reject(&:blank?).map do |category|
      Category.find(category)
    end
    @recipe.categories = categories
    if @recipe.update(recipe_params.except(:categories))
      redirect_to @recipe, notice: 'Recipe was successfully updated.'
    else
      render :edit
      flash[:alert] = 'Recipe was not updated.'
    end
  end
  private

  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params[:recipe][:categories].reject!(&:blank?) if params[:recipe][:categories]  
    params.require(:recipe).permit(:name, :ingredients, :instructions, :image, categories: [])
  end
end
