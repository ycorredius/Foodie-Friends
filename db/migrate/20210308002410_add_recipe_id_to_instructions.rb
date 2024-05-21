class AddRecipeIdToInstructions < ActiveRecord::Migration[6.1]
  def change
    add_column :instructions, :recipe_id, :int
  end
end
