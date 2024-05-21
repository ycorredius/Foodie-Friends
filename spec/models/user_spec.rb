# frozen_string_literal: true

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
require "rails_helper"

RSpec.describe User, type: :model do
  let(:user1) { FactoryBot.create(:random_user, :with_api_token) }
  let(:user2) { FactoryBot.create(:random_user, :with_api_token) }

  describe "User methods" do
    context "send_invitation" do
      it "send_invitation" do
        user1.send_invitation(user2)
        expect(Invitation.all.count).to eq(1)
      end

      it "should not allow invitation to have dup users " do
        user1.send_invitation(user2)
        user1.send_invitation(user2)
        expect(user1.invitations.count).to eq(1)
        expect(user1.invitations.last.confirmed).to eq(false)
      end
    end

    context "accept invitation" do
      it "should create an invitation that has a confirmed to be false" do
        user1.send_invitation(user2)
        expect(user1.invitations.last.confirmed).to eq(false)
      end
    end

    context "friends_with?" do
      it "should return true or false if there is a existing invitation" do
        user1.send_invitation(user2)
        expect(user1.friends_with?(user2)).to eq(false)
        user2.accept_invitation(user1)
        expect(user1.friends_with?(user2)).to eq(true)
      end
    end

    it "should return a list of user friends" do
      user1.send_invitation(user2)
      user2.accept_invitation(user1)
      expect(user1.friends.count).to eq(1)
    end
  end
end
