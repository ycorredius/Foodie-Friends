class IngredientSerializer
  include JSONAPI::Serializer
  attributes :quantity, :name
end
