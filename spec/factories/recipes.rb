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
FactoryBot.define do
  factory :recipe do
    user
    name { Faker::Food.dish }
    avatar { Faker::Internet.url }
    cook_time { Faker::Number.between(from: 1, to: 100) }
    difficulty { Faker::Number.between(from: 0, to: 3) }
    meal_type { Faker::Number.between(from: 1, to: 7) }
    prep_time { Faker::Number.between(from: 1, to: 100) }
    serving_size { Faker::Number.between(from: 1, to: 10) }
    is_private { Faker::Boolean.boolean }
    instructions { Faker::Lorem.paragraph(sentence_count: 3) }
  end
end
