# == Schema Information
#
# Table name: recipes
#
#  id         :integer          not null, primary key
#  image      :string
#  image_url  :string
#  is_private :boolean          default(FALSE)
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
class RecipeSerializer
    include FastJsonapi::ObjectSerializer
	attributes :id,:name, :instructions,:categories,:ingredients,:avatar,:image_url,:user_id
    
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients
    has_many :recipe_categories
    has_many :categories, through: :recipe_categories
    has_many :instructions
end

