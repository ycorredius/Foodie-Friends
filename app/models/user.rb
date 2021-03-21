# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string
#  userName        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password
    has_many :recipes

    validates :userName, presence: true
    validates :email, presence: true
    validates :email, uniqueness: true
    validates :password_digest, presence: true   
end
