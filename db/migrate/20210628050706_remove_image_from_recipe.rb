class RemoveImageFromRecipe < ActiveRecord::Migration[6.1]
  def change
    remove_column :recipes, :image
    remove_column :recipes, :image_url
    add_column :recipes, :avatar, :string
    # Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
