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
require "rails_helper"

RSpec.describe Invitation, type: :model do
  let(:user1) { FactoryBot.create(:random_user) }
  let(:user2) { FactoryBot.create(:random_user) }
  let(:user3) { create(:random_user) }

  it "should not allow a user to befriend themself" do
    invitation = user1.send_invitation(user1)

    expect(invitation).to eq(nil)
  end

  context "confirm record method" do
    it "should return false if not accepted" do
      user1.send_invitation(user2)
      expect(Invitation.confirmed_record?(user1.id, user2.id)).to eq(false)
    end

    it "should return false if Invitation doesn't exist" do
      expect(Invitation.confirmed_record?(user1, user2)).to eq(false)
    end
  end

  context "pending invitation" do
    it "should only show pending invitation to receiver" do
      user1.send_invitation(user2)
      expect(user1&.pending_invitations&.count).to eq(0)
      invitation = Invitation.find_invitation(user1.id, user2.id)
      expect(invitation.persisted?).to eq(true)
      user2.send_invitation(user3)
      expect(user2.pending_invitations.count).to eq(1)
    end
  end
end
