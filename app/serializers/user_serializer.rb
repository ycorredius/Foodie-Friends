# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string
#  password_digest :string
#  userName        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email,:userName,:password
end
