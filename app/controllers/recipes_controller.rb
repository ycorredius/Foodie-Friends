class RecipesController < ApplicationController
  before_action :set_recipe, only: %i[show update edit update]
  def index
    @pagy, @recipes = pagy_countless(Recipe.search(params[:name]).includes(:user, image_attachment: :blob))
  end

  def show
    @comments = @recipe.comments.order(created_at: :desc)
    @user = current_user
  end

  def new
    @recipe = Recipe.new
    3.times do
      @recipe.recipe_ingredients.build
    end
  end

  def create
    @recipe = current_user.recipes.new(recipe_params)
    @result = AddRecipeIngredients.new(@recipe, ingredients_params[:recipe_ingredients_attributes]).perform
    if @recipe.save && @result.success?
      redirect_to @recipe, notice: 'Recipe was successfully updated.'
    else
      respond_to do |format|
        format.turbo_stream { render :errors }
      end
    end
  end

  def edit; end

  def update
    @result = AddRecipeIngredients.new(@recipe, ingredients_params[:recipe_ingredients_attributes]).perform
    if @recipe.update(recipe_params)
      redirect_to(@recipe, notice: 'Recipe was successfully updated.', current_user:)
    else
      respond_to do |format|
        format.turbo_stream { render :errors }
      end
    end
  end

  private

  def set_recipe
    id = params[:recipe_id] || params[:id]
    @recipe = Recipe.includes(:user, :comments, :recipe_ingredients, :ingredients).find(id)
  end

  def recipe_params
    params.require(:recipe).permit(:name, :ingredients, :instructions, :image, :meal_type, :difficulty,
                                   :cook_time, :difficulty, :prep_time)
  end

  def ingredients_params
    params.require(:recipe).permit(recipe_ingredients_attributes: %i[id quantity unit name _destroy])
  end
end
