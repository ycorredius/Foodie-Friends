class RemovePhotoUrlFromRecipes < ActiveRecord::Migration[6.1]
  def change
    remove_column :recipes, :photo_url, :string
  end
end
