# frozen_string_literal: true

class AddContentToMessages < ActiveRecord::Migration[6.1]
  def change
    add_column :messages, :content, :text
  end
end
