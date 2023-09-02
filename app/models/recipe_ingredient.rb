# == Schema Information
#
# Table name: recipe_ingredients
#
#  id            :bigint           not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  ingredient_id :integer
#  recipe_id     :integer
#
class RecipeIngredient < ApplicationRecord
  belongs_to :ingredient
  belongs_to :recipe
end
