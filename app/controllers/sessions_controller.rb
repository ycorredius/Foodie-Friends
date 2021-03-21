class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: session_params[:email])
    binding.pry
    if @user && @user.password_digest == session_params[:password]
      login!
      @user = 
      render json: {
        logged_in: true,
      }
    else
      render json: { 
        status: 401,
        errors: ['no such user', 'verify credentials and try again or signup']
      }
    end
  end
  
  def is_logged_in?
      if logged_in? && current_user
        render json: {
          user: UserSerializer.new(current_user).serialized_json,
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
      logout!
      render json: {
        status: 200,
        logged_out: true
      }
    end
  private
  def session_params
      params.require(:credentials).permit(:email, :password_digest)
    end
end
