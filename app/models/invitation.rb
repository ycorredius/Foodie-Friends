# == Schema Information
#
# Table name: invitations
#
#  id         :bigint           not null, primary key
#  confirmed  :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  friend_id  :integer
#  user_id    :bigint           not null
#
# Indexes
#
#  index_invitations_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
class Invitation < ApplicationRecord
  belongs_to :user
  belongs_to :friend, class_name: 'User'

  # def self.reacted?(id1, id2)
  #   case1 = !Invitation.where(user_id: id1, friend_id: id2).empty?
  #   case2 = !Invitation.where(user_id: id2, freind_id: id1).empty?
  #   case1 || case2
  # end

  def self.confirmed_record?(id1, id2)
    case1 = !Invitation.where(user_id: id1, friend_id: id2, confirmed: true).empty?
    case2 = !Invitation.where(user_id: id2, friend_id: id1, confirmed: true).empty?
    case1 || case2
  end

  def self.pending_invitation(id1, id2)
    case1 = !Invitation.where(user_id: id1, friend_id: id2, confirmed: false).empty?
    case2 = !Invitation.where(user_id: id2, friend_id: id1, confirmed: false).empty?
    case1 || case2
  end

  def self.find_invitation(id1, id2)
    if Invitation.find_by(user_id: id1, friend_id: id2).nil?
      Invitation.find_by(user_id: id2, friend_id: id1)
    else
      Invitation.find_by(user_id: id1, friend_id: id2)
    end
  end

  def accept
    update(confirmed: true)
  end
end
