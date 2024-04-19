class Api::V1::RecipesController < Api::BaseController
  before_action :set_recipe, only: %i[show update]
  before_action :recipe_params, only: [:create]
  skip_before_action :authenticate_api_token!, only: %i[show index]

  def index
    # TODO: Update this route to only return required information to reduce the about of Kbs being sent. Currently everything including relationships that aren't necessary on initial call.
    recipes = Recipe.search(params[:name]).includes(:recipe_ingredients, :ingredients)
    render json: RecipeSerializer.new(recipes).serializable_hash
  end

  def create
    @recipe = current_user.recipes.build(recipe_params)
    if @recipe.save
      flash[:success] = 'Recipe successfully created'
      render json: {
        recipe: {
          id: @recipe.id,
          name: @recipe.name
        }
      }, status: :created
    else
      flash[:error] = 'Something went wrong'
      render json: flash, status: 500
    end
  end

  def show
    render json: RecipeSerializer.new(@recipe).serialized_json
  end

  def update
    if @recipe.update(@recipe, recipe_params)
      render json: RecipeSerializer.new(@recipe).serialized_json
    else
      flash[:error] = 'Something went wrong'
      render json: flash, status: 500
    end
  end

  private

  def set_recipe
    @recipe = Recipe.includes(:recipe_ingredients, :ingredients).find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(:name, :ingredients, :instructions, :image)
  end
end
