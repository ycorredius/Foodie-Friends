class Ingredient < ApplicationRecord
    validates_uniqueness_of :name, on: :create, message: "must be unique", if: proc { |obj| obj.condition? }
end
