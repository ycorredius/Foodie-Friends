# frozen_string_literal: true

class AddMoreFieldsToRecipe < ActiveRecord::Migration[7.1]
  def change
    add_column :recipes, :difficulty, :integer, default: 0
    add_column :recipes, :yield, :integer
  end
end
