Rails.application.routes.draw do
  resources :users,only: [:show,:create]
  resources :recipes 
  post '/login', to: 'sessions#create'
	delete '/logout', to: 'sessions#destroy'
	get '/logged_in', to: 'sessions#is_logged_in?'
  patch '/recipes/:id/upload_image', to: 'recipes#upload_image'
  get '/users/:userId/recipes', to: 'users#recipes'
  # get '/recipes/search-recipes/search', to: 'recipes#search_recipe'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end
