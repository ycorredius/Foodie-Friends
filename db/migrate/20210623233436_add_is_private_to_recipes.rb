class AddIsPrivateToRecipes < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :is_private, :boolean, :default => false
  end
end
