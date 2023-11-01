class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update]

  def index
    @cooks = current_user ? User.exclude_current_user(current_user) : User.all
  end

  def create
    @user = User.new(user_params)
    if @user.valid? && @user.save
      render json: @user
    else
      render json: {
        errors: @user.errors.full_messages
      }
    end
  end

  def show
    # render json: @user
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: 400
    end
  end

  def destroy
    @user.destroy
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
