# == Schema Information
#
# Table name: recipes
#
#  id         :integer          not null, primary key
#  name       :string
#  photo_url  :string           default("https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class RecipeSerializer
  # include FastJsonapi::ObjectSerializer
    include FastJsonapi::ObjectSerializer
  attributes :id,:name, :instructions, :photo_url,:categories,:ingredients

    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients
    has_many :recipe_categories
    has_many :categories, through: :recipe_categories
    has_many :instructions
end

