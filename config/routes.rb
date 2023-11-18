Rails.application.routes.draw do
  draw :api

  devise_for :users
  resources :users, only: [:index, :show]
  namespace :user do
    resources :friends
    resources :recipes, only: [:index]
  end

  resources :recipes, except: [ :index ] do 
    resources :comments, only: [:show, :update, :destroy, :create]
  end
  root to: "recipes#index"
end
