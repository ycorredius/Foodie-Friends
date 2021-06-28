# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  recipe_id  :string
#
class Photo < ApplicationRecord
    belongs_to :recipe
end

