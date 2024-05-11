# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  about                  :text
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :string
#  email                  :string
#  encrypted_password     :string           default(""), not null
#  first_name             :string
#  last_name              :string
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  sign_in_count          :integer
#  title                  :string           default("Food Enthusiast"), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :full_name, :email, :avatar_url, :about

  attribute :avatar_url do |user|
    Rails.application.routes.url_helpers.rails_blob_url(user.avatar, host: 'http://10.0.2.2:3000') if user.avatar.attached?
  end

  attribute :full_name do |user|
    "#{user.first_name}  #{user.last_name}"
  end
end
