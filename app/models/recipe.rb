# == Schema Information
#
# Table name: recipes
#
#  id         :integer          not null, primary key
#  avatar     :string
#  is_private :boolean          default(FALSE)
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

#TODO: Build out a recipe search for category and ingredients separately.
#TODO: Building recipe associations to able to be use without manual iteration through each param
class Recipe < ApplicationRecord
    belongs_to :user
    has_many :recipe_ingredients
    has_many :ingredients, through: :recipe_ingredients
    has_many :recipe_categories
    has_many :categories, through: :recipe_categories
    has_many :instructions
    has_many :photos
    has_one_attached :image
    

    accepts_nested_attributes_for :ingredients, allow_destroy: true
    accepts_nested_attributes_for :categories, allow_destroy: true
    accepts_nested_attributes_for :instructions, allow_destroy: true


    def build_recipe_attributes(recipe,recipe_params)
        recipe_params[:ingredients] ? recipe.ingredients_attributes=recipe_params[:ingredients] : nil
        recipe_params[:categories] ? recipe.categories_attributes=recipe_params[:categories] : nil
        recipe_params[:instructions] ? recipe.instructions_attributes=recipe_params[:instructions] : nil
        return recipe
    end

    def update_recipe(recipe,recipe_params)
        recipe.update(name: recipe_params[:name])
        recipe_params[:ingredients].each do |f|
            ingredient = Ingredient.find_by_id(f[:id])
            ingredient.update(name: f[:name], quantity: f[:quantity])
        end 
        recipe_params[:instructions].each do |f|
            instruction = Instruction.find_by_id(f[:id])
            instruction.update(content: f[:content])
        end 
        recipe_params[:categories].each do |f|
            category = Category.find_by_id(f[:id])
            category.update(tag: f[:tag])
        end
    end
end
