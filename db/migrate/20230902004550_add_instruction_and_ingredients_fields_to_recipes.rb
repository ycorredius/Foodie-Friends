# frozen_string_literal: true

class AddInstructionAndIngredientsFieldsToRecipes < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :instructions, :text
    add_column :recipes, :ingredients, :text
  end
end
