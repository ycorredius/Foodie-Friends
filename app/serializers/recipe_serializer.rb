# == Schema Information
#
# Table name: recipes
#
#  id           :bigint           not null, primary key
#  avatar       :string
#  ingredients  :text
#  instructions :text
#  is_private   :boolean          default(FALSE)
#  name         :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :integer
#
class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :instructions, :categories, :ingredients, :avatar

  has_many :recipe_categories
  has_many :categories, through: :recipe_categories
end
