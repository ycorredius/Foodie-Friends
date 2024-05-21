# frozen_string_literal: true

class CreateRecipeIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :recipe_ingredients, &:timestamps
  end
end
