class RecipesController < ApplicationController
  before_action :set_recipe, only: %i[show update upload_image]
  before_action :recipe_params, only: [:create]

  def index
    recipes = Recipe.all
    render json: RecipeSerializer.new(recipes).serializable_hash
  end

  def create
    @recipe = current_user.recipes.build(name: recipe_params[:name])
    @recipe.build_recipe_attributes(@recipe, recipe_params)
    if @recipe.save
      flash[:success] = "Recipe successfully created"
      render json: RecipeSerializer.new(@recipe).serialized_json
    else
      flash[:error] = "Something went wrong"
      render json: flash, status: 500
    end
  end

  def show
    render json: RecipeSerializer.new(@recipe).serialized_json
  end

  def update
    if @recipe.update_recipe(@recipe, recipe_params)
      render json: RecipeSerializer.new(@recipe).serialized_json
    else
      flash[:error] = "Something went wrong"
      render json: flash, status: 500
    end
  end

  private

  def set_recipe
    @recipe = Recipe.find_by_id(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(:id, :is_private, :name, :image, ingredients: %i[id name quantity],
                                                                    instructions: %i[id content], categories: %i[id tag])
  end
end
