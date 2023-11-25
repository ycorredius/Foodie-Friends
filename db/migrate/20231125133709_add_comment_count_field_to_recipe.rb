class AddCommentCountFieldToRecipe < ActiveRecord::Migration[7.1]
  def change
    add_column :recipes, :comments_count, :integer, default: 0
  end
end
