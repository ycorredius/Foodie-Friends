class PhotosController < ApplicationController
  before_action :set_recipe, only: [:create]

  def create
     @recipe.image.attach(params[:image])
      photo = url_for(@recipe.image)
      @recipe.avatar = photo
      @recipe.photos.build(image_url: photo)
    if @recipe.save
      render json: RecipeSerializer.new(@recipe).serialized_json
    else
      flash[:error] = "Something went wrong"
      render json: flash,status:500
    end
  end

  def destroy
    #TODO: Need to create a image show view with destory option.
  end

  private

  def set_recipe
    @recipe = Recipe.find_by_id(params[:recipeId])
  end
end
