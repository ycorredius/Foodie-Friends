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
#  serving_size   :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :integer
#

class Recipe < ApplicationRecord
  belongs_to :user, class_name: "User", foreign_key: "user_id"
  has_many :comments, class_name: "Comment"
  has_many :recipe_ingredients, strict_loading: true
  has_many :ingredients, through: :recipe_ingredients, strict_loading: true
  has_one_attached :image do |attachable|
    attachable.variant :icon, resize_to_limit: [58, 58]
    attachable.variant :thumbnail, resize_to_fit: [360, 780], format: "webp"
    attachable.variant :jumbo, resize_to_fit: [900, 1200], format: "webp"
  end

  validates :name, presence: true
  validates :instructions, presence: true, length: {minimum: 10}
  validates :meal_type, presence: true

  scope :search, ->(search) { where("lower(name) LIKE ?", "%#{search}%").where(is_private: false).order(updated_at: :desc) }

  enum :meal_type, %i[dinner lunch breakfast desert appetizer brunch side_dish other]
  enum :difficulty, %i[easy novice hard master]

  accepts_nested_attributes_for :recipe_ingredients, reject_if: :all_blank

  def total_time
    cook_time + prep_time
  end
end
