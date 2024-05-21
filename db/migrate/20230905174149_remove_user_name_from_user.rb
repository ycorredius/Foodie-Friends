# frozen_string_literal: true

class RemoveUserNameFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :username, :string
  end
end
