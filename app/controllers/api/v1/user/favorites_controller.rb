# frozen_string_literal: true

class Api::V1::User::FavoritesController < Api::BaseController
  def create
    return unless @user.favorites.create(favorite_params)

    head :no_content, status: :ok
  end

  def destroy
    favorite = @user.favorites.find_by(recipe_id: params[:id])
    if !favorite.nil?
      favorite.destroy
      head :no_content, status: :ok
    else
      render json: {message: "recipe not a favorite", status: :unprocessable_entity}
    end
  end

  private

  def favorite_params
    params.permit(:recipe_id)
  end
end
