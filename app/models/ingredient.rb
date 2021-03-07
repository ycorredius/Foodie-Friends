# == Schema Information
#
# Table name: ingredients
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Ingredient < ApplicationRecord
    has_many :recipe_ingredients, class_name: "recipe_ingredient", foreign_key: "reference_id"    
    has_many :recipes, through: :recipe_ingredient, source: :recipe_ingredient_table_foreign_key_to_recipes_table
end
