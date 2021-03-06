# == Schema Information
#
# Table name: recipes
#
#  id          :integer          not null, primary key
#  idMeal      :string
#  instruction :string
#  link        :string
#  name        :string
#  photo_url   :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require "test_helper"

class RecipeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
