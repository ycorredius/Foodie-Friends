# frozen_string_literal: true

class AddsSignDataToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :current_sign_in_at, :datetime
    add_column :users, :last_sign_in_at, :datetime
    add_column :users, :current_sign_in_ip, :string
    add_column :users, :last_sign_in_ip, :string
    add_column :users, :sign_in_count, :int
  end
end
