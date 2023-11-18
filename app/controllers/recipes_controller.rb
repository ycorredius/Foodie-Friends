class RecipesController < ApplicationController
  before_action :set_recipe, only: %i[show update edit update]
  def index
    @pagy, @recipes = pagy_countless(Recipe.search(params[:name]).includes(:categories, :recipe_categories, :user, image_attachment: :blob ))
  end

  def show
    @comments = @recipe.comments.order(created_at: :desc)
    @user = current_user
  end

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = current_user.recipes.new(recipe_params.except(:categories))
    categories = params[:recipe][:categories].reject(&:blank?).map do |category|
      Category.find(category)
    end if params[:recipe][:categories]
    @recipe.categories = categories
    if @recipe.save
      redirect_to @recipe, notice: 'Recipe was successfully updated.'
    else
      respond_to do |format|
       format.turbo_stream {render :errors}
      end
    end
  end

  def edit
  end

  def update
    categories = params[:recipe][:categories].reject(&:blank?).map do |category|
      Category.find(category)
    end
    @recipe.categories = categories
    if @recipe.update(recipe_params.except(:categories))
      redirect_to @recipe, notice: 'Recipe was successfully updated.', current_user: current_user
    else
      respond_to do |format|
       format.turbo_stream {render :errors}
      end
    end
  end
  private

  def set_recipe
    id = params[:recipe_id] ? params[:recipe_id] : params[:id]
    @recipe = Recipe.includes(:user, :categories,:recipe_categories, :comments, image_attachment: :blob).find(id)
  end

  def recipe_params
    params[:recipe][:categories].reject!(&:blank?) if params[:recipe][:categories]  
    params.require(:recipe).permit(:name, :ingredients, :instructions, :image, categories: [])
  end
end
