# == Schema Information
#
# Table name: inboxes
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  messages_id :bigint
#
# Indexes
#
#  index_inboxes_on_messages_id  (messages_id)
#
class Inbox < ApplicationRecord
	belongs_to :user
	has_many :messages
end
