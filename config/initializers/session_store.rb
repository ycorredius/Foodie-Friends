if Rails.env === "production"
  Rails.application.config.session_store :cookie_store, key: "_my_recipe_cookbook", domain: "your-frontend-domain"
else
  Rails.application.config.session_store :cookie_store, key: "_my_recipe_cookbook"
end
