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

  validates :quantity, presence: true

  UNITS = %W[tablespoon teaspoon cup ounces fluid_ounces gram pounds quart pint gallon liter milliliter pint]

  attr_accessor :name


  def name
    ingredient&.name
  end

  def recipe_ingredient
    "#{quantity} #{unit} #{ingredient.name}"
  end
end
