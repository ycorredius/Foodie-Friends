# frozen_string_literal: true

class CreateRecipeAvatars < ActiveRecord::Migration[6.1]
  def change
    create_table :recipe_avatars, &:timestamps
  end
end
