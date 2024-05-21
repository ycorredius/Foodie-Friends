# frozen_string_literal: true

class CreateInboxes < ActiveRecord::Migration[6.1]
  def change
    create_table :inboxes do |t|
      t.references :messages

      t.timestamps
    end
  end
end
