# == Schema Information
#
# Table name: ingredients
#
#  id         :bigint           not null, primary key
#  name       :string
#  quantity   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class IngredientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :quantity, :name
end
