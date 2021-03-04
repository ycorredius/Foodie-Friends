class Recipe < ApplicationRecord
    has_many :ingredients, class_name: "ingredient", foreign_key: "reference_id"
    has_many :categories, class_name: "category", foreign_key: "reference_id"

    def self.find_recipe_by_main_ingredient(ingredient)
        @recipes = Typhoeus.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=#{ingredient}")
        results = JSON.parse(@recipes.response_body)
        
        binding.pry
        
    end
end
