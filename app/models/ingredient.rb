# == Schema Information
#
# Table name: ingredients
#
#  id         :bigint           not null, primary key
#  name       :string
#  quantity   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Ingredient < ApplicationRecord
  has_many :recipe_ingredients
  has_many :recipes, through: :recipe_ingredients

  # validates :name, presence :true
  # //TODO: Create a defined list of reicpes that users can use. It will update in real time to suggest ingredients for them use.
  # //TODO: Find a list of know ingredients to seed data.
end
