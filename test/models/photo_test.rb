# frozen_string_literal: true

# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  recipe_id  :string
#
require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
