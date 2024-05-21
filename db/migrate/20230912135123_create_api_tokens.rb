# frozen_string_literal: true

class CreateApiTokens < ActiveRecord::Migration[6.1]
  def change
    create_table :api_tokens do |t|
      t.datetime :expires_at
      t.datetime :last_used_at
      t.jsonb :metada
      t.string :name
      t.string :token
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
