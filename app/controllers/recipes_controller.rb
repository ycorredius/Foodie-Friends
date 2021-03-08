class RecipesController < ApplicationController
  
  def index
        recipes = Recipe.all
        render json: RecipeSerializer.new(recipes).serializable_hash
    end

    def create
      #FIX_ME: this is just boiler plate needs customized finish
        @recipe = Recipe.new(name: params[:recipe][:name])
        
        binding.pry
        
        params[:recipe][:ingredients].each do |f|
          @recipe.ingredients.new(name: f.name, quantity: f.quantity)
        end 
        params[:recipe][:categories].each do |f|
          @recipe.categories.new(tag: f.tag)
        end 
        params[:recipe][:instructions].each do |x,v|
          @recipe.instructions.new(stepNumber: x,content:v)
        end 
        if @recipe.save
          flash[:success] = "Recipe successfully created"
          render json: RecipeSerializer.new(@Recipe).serializable_hash
        else
          flash[:error] = "Something went wrong"
          # render json
        end

    end

    private 
    #Currently does not accept categories,ingredients,instruction params
    
end
