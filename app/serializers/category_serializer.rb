# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  tag        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CategorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :tag
end
