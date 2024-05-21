# frozen_string_literal: true

class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: session_params[:email])
    if @user&.authenticate(session_params[:password])
      login!
      # TODO: Update to return user and a token
      render json: {
        user: @user,
        logged_in: true

      }, status: :ok
    else
      render json: {
        errors: ['User not found.', 'Verify info and try again or signup.']
      }
    end
  end

  def logged_in?
    if logged_in? && current_user
      render json: {
        user: current_user,
        logged_in: true
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
  end

  def destroy
    user = User.find_by_id(session[:user_id])
    return unless user && session.clear

    render json: {
      status: 200,
      logged_in: false,
      user: current_user
    }
  end

  private

  def session_params
    params.permit(:email, :password)
  end
end
