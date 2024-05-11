# == Schema Information
#
# Table name: recipes
#
#  id             :bigint           not null, primary key
#  avatar         :string
#  comments_count :integer          default(0)
#  cook_time      :integer          default(0)
#  difficulty     :integer          default("easy")
#  instructions   :text
#  is_private     :boolean          default(FALSE)
#  meal_type      :integer          default("other")
#  name           :string
#  prep_time      :integer          default(0)
#  serving_size   :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :integer
#
require "test_helper"

class RecipeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
