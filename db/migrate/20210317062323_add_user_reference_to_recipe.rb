# frozen_string_literal: true

class AddUserReferenceToRecipe < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :user_id, :int
  end
end
