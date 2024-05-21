class ApplicationController < ActionController::Base
  include Pagy::Backend
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def after_sign_in_path_for(resource)
    stored_location_for(resource)
  end

  def after_sign_out_path_for(_resource)
    new_user_session_path
  end

  def configure_permitted_parameters
    signup_keys = %i[first_name last_name email password password_confirmation avatar]
    extra_keys = %i[first_name last_name avatar email]
    devise_parameter_sanitizer.permit(:sign_up, keys: signup_keys)
    devise_parameter_sanitizer.permit(:account_update, keys: signup_keys)
  end
end
