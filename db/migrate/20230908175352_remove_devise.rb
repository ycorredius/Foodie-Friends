class RemoveDevise < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :encrypted_password, :string
    remove_column :users, :reset_password_token, :string
    remove_column :users, :reset_password_sent_at, :string
    remove_column :users, :remember_created_at, :string
    remove_column :users, :provider, :string
    remove_column :users, :uid, :string
    remove_column :users, :sign_in_count, :integer
    remove_column :users, :tokens, :json
  end
end
