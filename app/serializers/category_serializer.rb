# frozen_string_literal: true

# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  tag        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  recipe_id  :bigint
#
# Indexes
#
#  index_categories_on_recipe_id  (recipe_id)
#
# Foreign Keys
#
#  fk_rails_...  (recipe_id => recipes.id)
#
class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :tag
end
