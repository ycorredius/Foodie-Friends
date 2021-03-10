# == Schema Information
#
# Table name: instructions
#
#  id         :integer          not null, primary key
#  content    :string
#  stepNumber :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  recipe_id  :integer
#
class Instruction < ApplicationRecord
    belongs_to :recipe
end
