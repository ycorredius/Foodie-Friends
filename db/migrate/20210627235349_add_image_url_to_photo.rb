# frozen_string_literal: true

class AddImageUrlToPhoto < ActiveRecord::Migration[6.1]
  def change
    add_column :photos, :image_url, :string
  end
end
