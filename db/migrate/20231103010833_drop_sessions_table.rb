# frozen_string_literal: true

class DropSessionsTable < ActiveRecord::Migration[7.1]
  def change
    drop_table :sessions
  end
end
