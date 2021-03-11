class RecipesController < ApplicationController
  
  def index
        recipes = Recipe.all
        render json: RecipeSerializer.new(recipes).serializable_hash
    end

    def create
      #FIX_ME: this is just boiler plate needs customized finish
        @recipe = Recipe.new(name: params[:recipe][:name])
        params[:recipe][:ingredients].each do |f|
          @recipe.ingredients.new(name: f[:name], quantity: f[:quantity] )
        end 
        params[:recipe][:categories].each do |f|
          @recipe.categories.new(tag: f[:tag])
        end 
        params[:recipe][:instructions].each_with_index do |x,v|
          @recipe.instructions.new(stepNumber: v,content:x)
        end 
        
        if @recipe.save
          flash[:success] = "Recipe successfully created"
          options = {}
          options[:include] =[:instructions, :'instructions.stepNumber',:'instructions.content',:ingredients,:'ingredients.quantity',:'ingredients.name'] 
          render json: RecipeSerializer.new(@recipe,options).serialized_json
        else
          flash[:error] = "Something went wrong"
          render json: flash
        end

    end

    private 
    #Currently does not accept categories,ingredients,instruction params
    
end
