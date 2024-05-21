# frozen_string_literal: true

class AddImageUrlColumnToRecipe < ActiveRecord::Migration[6.1]
  def change
    add_column :recipes, :image_url, :string
    # Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
