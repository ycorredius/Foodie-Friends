class Recipe < ApplicationRecord
    has_many :ingredients, class_name: "ingredient", foreign_key: "reference_id"
    has_many :categories, class_name: "category", foreign_key: "reference_id"
    
end
