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
    has_one_attached :avatar

    has_many :recipes
    has_many :invitations   
    has_many :pending_invitations, -> {where confirmed: false }, class_name: 'Invitation', foreign_key: "friend_id"

    validates :userName, presence: true
    validates :userName, uniqueness: true
    validates :email, presence: true
    validates :email, uniqueness: true	
    validates :password_digest, presence: true   

    def friends
        friend_i_sent_invitation = Invitation.where(user_id: id, confirmed: true).pluck(:friend_id)
        friend_i_got_invitation = Invitation.where(friend_id: id, confirmed: true).pluck(:user_id)
        ids = friend_i_got_invitation + friend_i_sent_invitation
        User.where(id: ids)
    end

    def friends_with?(user)
        Invitation.confirmed_record?(id,user. id)
    end

    def sent_invitation(user) 
        invitations.create(friend_id: user.id)
    end
end
