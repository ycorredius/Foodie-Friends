# frozen_string_literal: true

class RemoveQuantityFromIngredients < ActiveRecord::Migration[7.1]
  def up
    remove_column :ingredients, :quantity
  end

  def down
    add_column :ingredients, :quantity, :string
  end
end
