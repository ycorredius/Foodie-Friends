# == Schema Information
#
# Table name: recipe_categories
#
#  id          :integer          not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer
#  recipe_id   :integer
#
class RecipeCategory < ApplicationRecord
    belongs_to :category
    belongs_to :recipe
end
