# frozen_string_literal: true

class FavoritesController < ApplicationController
  before_action :set_recipe, only: %i[create destroy]

  def create
    current_user.favorites.create(recipe: @recipe)
    @favorites = current_user.favorites
    @recipe = Recipe.find(params[:recipe_id])
    render turbo_stream: turbo_stream.replace('favorite_button', partial: 'favorite_button',
                                              locals: { recipe: @recipe, recipe_id: @recipe_id,
                                                        favorites: @favorites })
  end

  def destroy
    @favorites = current_user.favorites
    @recipe_id = Recipe.find(params[:id])
    favorite = Favorite.find_by(user_id: current_user.id, recipe_id: @recipe_id)
    favorite.destroy!

    render turbo_stream: turbo_stream.replace('favorite_button', partial: 'favorite_button',
                                              locals: { recipe: @recipe, recipe_id: @recipe_id,
                                                        favorites: @favorites })
  end

  private

  def set_recipe
    @recipe = params[:recipe_id] ? Recipe.find_by(id: params[:recipe_id]) : Recipe.find(params[:id])
  end
end
