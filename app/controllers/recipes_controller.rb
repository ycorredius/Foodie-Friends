class RecipesController < ApplicationController
  before_action :set_recipe, only: %i[show update edit update]
  def index
    @pagy, @recipes = pagy(Recipe.all.where( "lower(name) LIKE ?", "%#{params[:name]}%").includes(:categories, :user))
  end

  def show
  end

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = current_user.recipes.new(recipe_params.except(:categories))
    categories = params[:recipe][:categories].reject(&:blank?).map do |category|
      Category.find(category)
    end if params[:recipe][:categories]
    @recipe.categories = categories
    if @recipe.save
      redirect_to @recipe, notice: 'Recipe was successfully updated.'
    else
      respond_to do |format|
       format.turbo_stream {render :errors}
      end
    end
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
      respond_to do |format|
       format.turbo_stream {render :errors}
      end
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
