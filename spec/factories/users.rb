# == Schema Information
#
# Table name: users
#
#  id                   :bigint           not null, primary key
#  current_sign_in_at   :datetime
#  current_sign_in_ip   :string
#  email                :string
#  encrypted_password   :string
#  image                :string
#  last_sign_in_at      :datetime
#  last_sign_in_ip      :string
#  name                 :string
#  nickname             :string
#  password_digest      :string
#  remember_created_at  :datetime
#  reset_password_token :string
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
FactoryBot.define do
  factory :user do
    email { "test@example.com" }
  end
end
