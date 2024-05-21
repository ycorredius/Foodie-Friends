# frozen_string_literal: true

class AddTitleAndAboutToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :about, :text
    add_column :users, :title, :string, default: 'Food Enthusiast', null: false
  end
end
