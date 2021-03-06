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
class Recipe < ApplicationRecord
    has_many :ingredients, class_name: "ingredient", foreign_key: "reference_id"
    has_many :categories, class_name: "category", foreign_key: "reference_id"
    
end
