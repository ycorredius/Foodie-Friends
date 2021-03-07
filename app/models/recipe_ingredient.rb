# == Schema Information
#
# Table name: recipe_ingredients
#
#  id            :integer          not null, primary key
#  quantity      :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  ingredient_id :integer
#  recipe_id     :integer
#
class RecipeIngredient < ApplicationRecord
    belongs_to :recipe, class_name: "recipe", foreign_key: "recipe_id"
    belongs_to :ingredient, class_name: "ingredient", foreign_key: "ingredient_id"
end
