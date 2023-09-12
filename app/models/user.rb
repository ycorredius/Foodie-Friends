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
class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar

  has_many :recipes
  has_many :invitations
  has_many :pending_invitations, -> { where confirmed: false }, class_name: "Invitation", foreign_key: "friend_id"

  validates :email, presence: true
  validates :email, uniqueness: true

  def friends
    friend_i_sent_invitation = Invitation.where(user_id: id, confirmed: true).pluck(:friend_id)
    friend_i_got_invitation = Invitation.where(friend_id: id, confirmed: true).pluck(:user_id)
    ids = friend_i_got_invitation + friend_i_sent_invitation
    User.where(id: ids)
  end

  def friends_with?(user)
    Invitation.confirmed_record?(id, user.id)
  end

  def sent_invitation(user)
    invitations.create(friend_id: user.id)
  end
end
