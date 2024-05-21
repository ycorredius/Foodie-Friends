class User::RecipesController < ApplicationController
  before_action :set_user

  def index; end

  private

  def set_user
    @user = User.includes(:recipes).find(current_user.id)
  end
end
