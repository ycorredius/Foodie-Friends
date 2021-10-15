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
class User < ApplicationRecord
    has_secure_password

    has_many :recipes
    validates :userName, presence: true
    validates :userName, uniqueness: true
    validates :email, presence: true
    validates :email, uniqueness: true	
    validates :password_digest, presence: true   
end
