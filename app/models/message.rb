# == Schema Information
#
# Table name: messages
#
#  id            :bigint           not null, primary key
#  content       :text
#  read          :boolean
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  reciepient_id :integer
#  sender_id     :integer
#
class Message < ApplicationRecord
  belongs_to :user
end
