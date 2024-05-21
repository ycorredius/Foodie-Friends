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
class Category < ApplicationRecord
  belongs_to :recipe, optional: true
  # //TODO: Create a defined list of categories dont allow user to free text.
  # //TODO: Find some sort of list to read information that we can populate data with.
end
