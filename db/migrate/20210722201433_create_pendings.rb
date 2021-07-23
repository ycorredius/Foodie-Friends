class CreatePendings < ActiveRecord::Migration[6.1]
  def change
    create_table :pendings do |t|

      t.timestamps
    end
  end
end
