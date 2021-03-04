# == Schema Information
#
# Table name: recipes
#
#  id          :integer          not null, primary key
#  instruction :string
#  name        :string
#  photo_url   :string           default("https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Recipe < ApplicationRecord
    has_many :ingredients, class_name: "ingredient", foreign_key: "reference_id"
    has_many :categories, class_name: "category", foreign_key: "reference_id"
    
end
