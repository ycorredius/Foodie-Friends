# frozen_string_literal: true

class AddImageColumnToRecipe < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :image, :string
  end
end
