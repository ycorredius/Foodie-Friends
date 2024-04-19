# == Schema Information
#
# Table name: recipes
#
#  id             :bigint           not null, primary key
#  avatar         :string
#  comments_count :integer          default(0)
#  cook_time      :integer          default(0)
#  difficulty     :integer          default("easy")
#  instructions   :text
#  is_private     :boolean          default(FALSE)
#  meal_type      :integer          default("other")
#  name           :string
#  prep_time      :integer          default(0)
#  yield          :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :integer
#

class Recipe < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :user, class_name: 'User', foreign_key: 'user_id'
  has_many :comments, class_name: 'Comment'
  has_many :recipe_ingredients, strict_loading: true
  has_many :ingredients, through: :recipe_ingredients, strict_loading: true
  has_one_attached :image do |attachable|
    attachable.variant :icon, resize_to_limit: [58, 58]
    attachable.variant :thumb, resize_to_fill: [8550, 440]
    attachable.variant :jumbo, resize_to_fit: [1200, 1200], format: 'webp'
  end

  validates :name, presence: true
  validates :instructions, presence: true, length: {minimum: 10}
  validates :meal_type, presence: true

  scope :search, lambda { |search|
                   where('lower(name) LIKE ?', "%#{search}%").where(is_private: false).order(updated_at: :desc)
                 }

  enum :meal_type, %i[dinner lunch breakfast desert appetizer brunch side_dish other]
  enum :difficulty, %i[easy novice hard master]

  accepts_nested_attributes_for :recipe_ingredients, reject_if: :all_blank

  def total_time
    cook_time + prep_time
  end

  def convert_image
    ImageProcessing::MiniMagick.source(url_for(recipe.image))
  end
end
