class CreateRecipeAvatars < ActiveRecord::Migration[6.1]
  def change
    create_table :recipe_avatars do |t|
      t.timestamps
    end
  end
end
