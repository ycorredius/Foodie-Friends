# == Schema Information
#
# Table name: users
#
#  id                   :bigint           not null, primary key
#  current_sign_in_at   :datetime
#  current_sign_in_ip   :string
#  email                :string
#  encrypted_password   :string
#  first_name           :string
#  image                :string
#  last_name            :string
#  last_sign_in_at      :datetime
#  last_sign_in_ip      :string
#  nickname             :string
#  password_digest      :string
#  remember_created_at  :datetime
#  reset_password_token :string
#  sign_in_count        :integer
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
require "test_helper"

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
