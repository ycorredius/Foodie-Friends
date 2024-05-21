# frozen_string_literal: true

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
class RecipeSerializer
  include FastJsonapi::ObjectSerializer

  attributes :id, :name, :instructions, :cook_time, :difficulty, :prep_time, :avatar, :thumbnail_url, :jumbo_url, :updated_at,
             :user_avatar, :user

  cache_options store: Rails.cache, namespace: 'recipe-serializer', expires_in: 1.hours

  has_many :recipe_ingredients
  belongs_to :user

  attribute :thumbnail_url do |recipe|
    if recipe.image.attached?
      Rails.application.routes.url_helpers.rails_blob_url(recipe.image.variant(:thumbnail),
                                                          host: 'http://10.0.2.2:3000')
    end
  end

  attribute :jumbo_url do |recipe|
    if recipe.image.attached?
      Rails.application.routes.url_helpers.rails_blob_url(recipe.image.variant(:jumbo),
                                                          host: 'http://10.0.2.2:3000')
    end
  end

  attribute :user_avatar do |recipe|
    if recipe.user.avatar.attached?
      Rails.application.routes.url_helpers.rails_blob_url(recipe.user.avatar.variant(:jumbo),
                                                          host: 'http://10.0.2.2:3000')
    end
  end
end
