# frozen_string_literal: true

class AddReciepientIdToMessages < ActiveRecord::Migration[6.1]
  def change
    add_column :messages, :reciepient_id, :int
  end
end
