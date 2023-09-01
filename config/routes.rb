  Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # devise_for :users
  resources :user do
    resources :friends
    resources :recipes, only: [:index]
  end
  resources :recipes do
    resources :photos, only: [:create]
  end
  resources :recipes 
  resources :categories, only:[:destroy,:index]
  resources :instructions, only:[:destroy]
  resources :ingredients,only: [:destroy,:index]

  #custom routes for sessions
  post '/login', to: 'sessions#create'
	delete '/logout', to: 'sessions#destroy'
	get '/logged_in', to: 'sessions#is_logged_in?'
  patch '/recipes/:id/upload_image', to: 'recipes#upload_image'
  end
