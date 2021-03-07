class RecipesController < ApplicationController
    before_action :create_recipe_params, only: :create  
  
  def index
        recipes = Recipe.all
        render json: RecipeSerializer.new(recipes).serialized_json
    end

    def create
      #FIX_ME: this is just boiler plate needs customized finish
        @recipe = Recipe.new(name:params[:recipe][:name])
        @recipe.
        if @recipe.save
          flash[:success] = "Recipe successfully created"
          
          render json: RecipeSerializer.new(@Recipe).serialized_json
        else
          flash[:error] = "Something went wrong"
          # render json
        end
    end

    private 
    #Currently does not accept categories,ingredients,instruction params
    def create_recipe_params
      params.require(:recipe).permit(:name,:categories,:ingredients,:instructions)
    end
end
