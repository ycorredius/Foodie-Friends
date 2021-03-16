# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  tag        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
    #//TODO: Create a defined list of categories dont allow user to free text. 
    #//TODO: Find some sort of list to read information that we can populate data with. 
    
end
