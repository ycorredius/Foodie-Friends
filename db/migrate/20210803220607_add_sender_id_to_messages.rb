# frozen_string_literal: true

class AddSenderIdToMessages < ActiveRecord::Migration[6.1]
  def change
    add_column :messages, :sender_id, :int
  end
end
