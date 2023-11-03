class ApplicationController < ActionController::Base
  include Pagy::Backend
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    signup_keys = [:first_name, :last_name,:email,:password,:password_confirmation, :avatar]
    extra_keys = [:first_name, :last_name, :avatar, :email]
    devise_parameter_sanitizer.permit(:sign_up, keys: signup_keys)
    devise_parameter_sanitizer.permit(:account_update, keys: signup_keys)
  end
end
