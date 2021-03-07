class AddRecipeToRecipeCategory < ActiveRecord::Migration[6.1]
  def change
    add_column :recipe_categories, :recipe_id, :int
    add_column :recipe_categories, :category_id, :int
  end
end
