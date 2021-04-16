# == Schema Information
#
# Table name: recipes
#
#  id         :integer          not null, primary key
#  image      :string
#  image_url  :string
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

#TODO: Build out a recipe search for category and ingredients separately.
class Recipe < ApplicationRecord
    belongs_to :user
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients
    has_many :recipe_categories
    has_many :categories, through: :recipe_categories
    has_many :instructions
    has_one_attached :avatar
    # validates :name, presence :true 
end
