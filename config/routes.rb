Rails.application.routes.draw do
  resources :users,only: [:show,:create]
  resources :categories
  resources :recipes
  resources :ingredients
  resources :sessions
  resources :photos
  post '/login', to: 'sessions#create'
	delete '/logout', to: 'sessions#destroy'
	get '/logged_in', to: 'sessions#is_logged_in?'
  patch '/recipes/:id/upload_image', to: 'recipes#upload_image'
  get '/recipes/search-recipes/search', to: 'recipes#search_recipe'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
