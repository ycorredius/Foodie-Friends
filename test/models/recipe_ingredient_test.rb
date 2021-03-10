# == Schema Information
#
# Table name: recipe_ingredients
#
#  id            :integer          not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  ingredient_id :integer
#  recipe_id     :integer
#
require "test_helper"

class RecipeIngredientTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
