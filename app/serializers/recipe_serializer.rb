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
  attributes :id, :name, :instructions, :ingredients, :avatar, :user, :thumbnail_url, :jumbo_url, :updated_at

  cache_options enabled: true, cache_length: 12.hours

  belongs_to :user

  attribute :thumbnail_url do |recipe|
    Rails.application.routes.url_helpers.rails_blob_url(recipe.image.variant(:thumb), host: 'http://10.0.2.2:3000') if recipe.image.attached?
  end
  attribute :jumbo_url do |recipe|
    Rails.application.routes.url_helpers.rails_blob_url(recipe.image.variant(:jumbo), host: 'http://10.0.2.2:3000') if recipe.image.attached?
  end
end
