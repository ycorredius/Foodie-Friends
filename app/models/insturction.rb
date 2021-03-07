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
class Insturction < ApplicationRecord
    belongs_to :recipe, class_name: "recipe", foreign_key: "recipe_id"
end
