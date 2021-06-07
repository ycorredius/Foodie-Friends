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
          params[:instructions].each_with_index do |x|
            @recipe.instructions.build(content:x)
          end 
        end
        @recipe.image_url =  "http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6094cedb67cb21a66a2b1d6daeef7d4b93aac13a/nishaan-ahmed-Mh087eDe_qA-unsplash.jpg"
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
              @recipe.instructions.build()
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
      params.require(:recipe).permit(:name,:image,:ingredients,:instructions,:categories)
    end
end
