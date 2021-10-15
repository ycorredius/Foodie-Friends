# == Schema Information
#
# Table name: recipe_avatars
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class RecipeAvatar < ApplicationRecord
    has_one_attached :image
end
