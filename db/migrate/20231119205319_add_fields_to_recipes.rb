# frozen_string_literal: true

class AddFieldsToRecipes < ActiveRecord::Migration[7.1]
  def change
    add_column :recipes, :prep_time, :integer, default: 0
    add_column :recipes, :cook_time, :integer, default: 0
    add_column :recipes, :meal_type, :integer, default: 7
  end
end
