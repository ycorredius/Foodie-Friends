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
