# == Schema Information
#
# Table name: recipe_ingredients
#
#  id            :bigint           not null, primary key
#  quantity      :string           default("")
#  unit          :string           default("")
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  ingredient_id :integer
#  recipe_id     :integer
#
class RecipeIngredient < ApplicationRecord
  belongs_to :ingredient
  belongs_to :recipe

  validates :quantity,:unit, presence: true

  UNITS = %W[tablespoon teaspon cup ounces fluid_ounces gram pounds quart pint gallon liter milliliter pint]
end
