class CreateInsturctions < ActiveRecord::Migration[6.1]
  def change
    create_table :insturctions do |t|
      t.string :stepNumber
      t.string :content

      t.timestamps
    end
  end
end
