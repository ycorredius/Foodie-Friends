Rails.application.routes.draw do
  resources :user do
    resources :friends
    resources :recipes, only: [:index]
  end
  resources :recipes do
    resources :photos, only: [:create]
  end
  resources :recipes

  # custom routes for sessions
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/logged_in", to: "sessions#is_logged_in?"
  # TODO: Create controller that handles the upload of images
  patch "/recipes/:id/upload_image", to: "recipes#upload_image"

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :auth
    end
  end
end
