# == Schema Information
#
# Table name: recipe_ingredients
#
#  id         :integer          not null, primary key
#  quantity   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class RecipeIngredient < ApplicationRecord
end
