# frozen_string_literal: true

Rails.application.routes.draw do
  draw :api

  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?

  devise_for :users
  resources :users, only: %i[index show]
  namespace :user do
    resources :friends, only: %i[index destroy]
    resources :recipes, only: [:index]
    resources :invitations
  end
  resources :favorites, only: %i[create destroy]
  resources :recipes, except: [:index] do
    resources :comments, only: %i[show update destroy create]
  end
  root to: 'recipes#index'
end
