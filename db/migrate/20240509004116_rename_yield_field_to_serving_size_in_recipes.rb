class RenameYieldFieldToServingSizeInRecipes < ActiveRecord::Migration[7.1]
  def change
    rename_column :recipes, :yield, :serving_size
  end
end
