class FriendsController < ApplicationController
  before_action :set_user, only: %i[index new create]

  def index
    @friends = @user.friends
  end

  def create
  end

  def new
  end

  private

  def set_user
    @user = User.find(current_user.id)
  end
end
