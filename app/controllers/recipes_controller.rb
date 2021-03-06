class RecipesController < ApplicationController
    def index
        recipes = Recipe.all
        render json: RecipeSerializer.new(recipes).serialized_json
    end
    def create
        
        binding.pry
        
        @recipe = Recipe.new(params[:recipe])
        if @recipe.save
          flash[:success] = "Recipe successfully created"
          redirect_to @recipe
        else
          flash[:error] = "Something went wrong"
          render 'new'
        end
    end
end
