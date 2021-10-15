# == Schema Information
#
# Table name: recipe_categories
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer
#  recipe_id   :integer
#
require "test_helper"

class RecipeCategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
