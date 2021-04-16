class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show]

  def index
        recipes = Recipe.all
        render json: RecipeSerializer.new(recipes).serializable_hash
    end 

    def create
      @recipe = current_user.recipes.build(name: params[:name])
        if params[:ingredients]
          params[:ingredients].each do |f|
            @recipe.ingredients.build(name: f[:name], quantity: f[:quantity])
          end 
        end
        
        if params[:categories]
          params[:categories].each do |f|
            @recipe.categories.build(tag: f)
          end 
        end

        if params[:instructions]
          params[:instructions].each_with_index do |x,v|
            @recipe.instructions.build(stepNumber: v+1,content:x)
          end 
        end

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
    
    def show
      options = {}
      render json: RecipeSerializer.new(@recipe).serialized_json
    end

    def update
      
      binding.pry
      
      @recipe = Recipe.find_by_id(params[:id])
        if @recipe.update_attributes(params[:recipe])
          flash[:success] = "Reciepe was successfully updated"
          render json: RecipeSerializer.new(@recipe).serialized_json
        else
          flash[:error] = "Something went wrong"
        end
    end
  def upload_image
    @recipe = Recipe.find_by_id(params[:id])
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
      params.require(:recipe).permit(:name,:image,:ingredients,:instructions,:categories)
    end
end
