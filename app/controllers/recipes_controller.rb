class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show]

  def index
        recipes = Recipe.all
        render json: RecipeSerializer.new(recipes).serializable_hash
    end 

    def create
      binding.pry

      @recipe = current_user.recipes.build(name: recipe_params[:name])
      
      
      if @recipe
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
      
      binding.pry
      
    end

    def show
      options = {}
      render json: RecipeSerializer.new(@recipe).serialized_json
    end

    def update
      @recipe = Recipe.find_by_id(params[:id])
      @recipe.update(name: params[:name])
        if params[:ingredients]
          params[:ingredients].each do |f|
            @ingredient = Ingredient.find_by_id(f[:id])
            if @ingredient
              @ingredient.update(name: f[:name], quantity: f[:quantity])
            else
              @recipe.ingredients.build(name: f[:name], quantity: f[:quantity])
            end
          end
        end
        
        if params[:categories]
          params[:categories].each do |f|
            @category = Category.find_by_id(f[:id])
            if @category
              @category.update(tag:f[:tag])
            else
              @recipe.categories.build(tag: f[:tag])
            end
          end
        end

        if params[:instructions]
          params[:instructions].each do |f|
            @instruction = Instruction.find_by_id(f[:id])
            if @instruction
              @instruction.update(content: f[:content])
            else
              @recipe.instructions.build(content: f[:content])
            end
          end 
        end 

        if @recipe.save
          options = {}
          options[:include] =[:instructions,:ingredients,:categories] 
          render json: RecipeSerializer.new(@recipe,options).serialized_json
        else
           flash[:error] = "Something went wrong"
            render json: flash,status:500
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
      params.require(:recipe).permit(:name,:image,ingredients: [:name,:quantity],instructions: [:name],categories: [:tag])
    end
end
