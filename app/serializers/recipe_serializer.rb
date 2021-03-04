class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :instruction, :photo_url
end
