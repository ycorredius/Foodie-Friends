# frozen_string_literal: true

class AddQuantityAndUnitToRecipeIngredient < ActiveRecord::Migration[7.1]
  def change
    add_column :recipe_ingredients, :quantity, :string, default: ''
    add_column :recipe_ingredients, :unit, :string, default: ''
  end
end
