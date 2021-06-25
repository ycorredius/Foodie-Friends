class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :upload_image]
  before_action :recipe_params, only: [:create, :update]
  def index
    recipes = Recipe.all
    render json: RecipeSerializer.new(recipes).serializable_hash
  end 

    def create
      @recipe = current_user.recipes.build(name: recipe_params[:name])
      @recipe.build_recipe_attributes(@recipe,recipe_params)
      if @recipe.save
          flash[:success] = "Recipe successfully created"
          options = {}
          options[:include] =[:instructions,:ingredients,:categories] 
          render json: RecipeSerializer.new(@recipe,options).serialized_json
      else
          flash[:error] = "Something went wrong"
          render json: flash,status:500
      end
    end
    
    def search_recipe
    end

    def show
      render json: RecipeSerializer.new(@recipe).serialized_json
    end

    def update
      @recipe.update(name: recipe_params[:name])
      @recpe.update_recipe(@recipe, recipe_params)
      options = {}
      options[:include] =[:instructions,:ingredients,:categories] 
      render json: RecipeSerializer.new(@recipe,options).serialized_json
        
    end


  def upload_image
    if @recipe.image_url
      @recipe.avatar.purge
      @recipe.avatar.attach(params[:image])
      photo = url_for(@recipe.avatar)  
    else
      @recipe.avatar.attach(params[:image])
      photo = url_for(@recipe.avatar)  
    end

    if @recipe.update(image_url: photo)
      render json: RecipeSerializer.new(@recipe).serialized_json
    else
      flash[:error] = "Something went wrong"
      render json: flash,status:500
    end
  end
    
    private

    def set_recipe
      @recipe = Recipe.find_by_id(params[:id])
    end

    def recipe_params
      params.require(:recipe).permit(:name,:image,ingredients: [:name,:quantity],instructions: [:content],categories: [:tag])
    end
end
