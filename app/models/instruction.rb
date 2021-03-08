# == Schema Information
#
# Table name: insturctions
#
#  id         :integer          not null, primary key
#  content    :string
#  stepNumber :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Instruction < ApplicationRecord
    belongs_to :recipe
end
