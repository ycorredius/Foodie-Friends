# frozen_string_literal: true

class CreateRecipeCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :recipe_categories, &:timestamps
  end
end
