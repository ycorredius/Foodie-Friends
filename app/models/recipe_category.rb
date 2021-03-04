# == Schema Information
#
# Table name: recipe_categories
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class RecipeCategory < ApplicationRecord
    belongs_to :category, class_name: "category", foreign_key: "category_id"
    has_many :recipes, class_name: "recipe", foreign_key: "reference_id"
end
