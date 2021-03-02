class CreateRecipies < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :photo_url
      t.string :link
      t.string :instruction

      t.timestamps
    end
  end
end
