Rails.application.routes.draw do
  devise_for :users
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
      resources :auths, only: %i[create show]
      delete "/auths", to: "auths#destroy"
      resource :me, controller: :me, only: :show
      resource :user do
        resources :friends, only: %i[create destroy index]
      end
      resources :recipes, only: %i[create update destroy show index]
    end
  end
end
