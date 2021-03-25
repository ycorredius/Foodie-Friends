class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show]

  def index
        recipes = Recipe.all
        render json: RecipeSerializer.new(recipes).serializable_hash
    end

    def create
        binding.pry
        @recipe = current_user.recipes.build(name: params[:recipe][:name])
        if params[:recipe][:ingredients]
          params[:recipe][:ingredients].each do |f|
            @recipe.ingredients.new(name: f[:name], quantity: f[:quantity] )
          end 
        end

        if params[:recipe][:categories]
          params[:recipe][:categories].each do |f|
            @recipe.categories.new(tag: f[:tag])
          end 
        end

        if params[:recipe][:instructions]
          params[:recipe][:instructions].each_with_index do |x,v|
            @recipe.instructions.new(stepNumber: v,content:x)
          end 
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
    
    def show
      render json: RecipeSerializer.new(@recipe).serialized_json
    end

    private

    def set_recipe
      @recipe = Recipe.find_by_id(params[:id])
    end

    def recipe_params
      params.require(:recipe).permit(:name,:image,:ingredients,:instructions,:categories)
    end
end
