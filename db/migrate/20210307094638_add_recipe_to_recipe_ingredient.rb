class AddRecipeToRecipeIngredient < ActiveRecord::Migration[6.1]
  def change
    add_column :recipe_ingredients, :recipe_id, :int
    add_column :recipe_ingredients, :ingredient_id, :int
  end
end
