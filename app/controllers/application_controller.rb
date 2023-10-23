class ApplicationController < ActionController::Base
  include Pagy::Backend
  
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    signup_keys = [:first_name, :last_name,:email,:password,:password_confirmation]
    devise_parameter_sanitizer.permit(:sign_up, keys: signup_keys)
  end
end
