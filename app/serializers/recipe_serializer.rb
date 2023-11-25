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
class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :instructions, :categories, :ingredients, :avatar, :user

  cache_options enabled: true, cache_length: 12.hours

  belongs_to :user
  has_many :recipe_categories
  has_many :categories, through: :recipe_categories
end
