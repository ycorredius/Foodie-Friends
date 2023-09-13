# == Schema Information
#
# Table name: api_tokens
#
#  id           :bigint           not null, primary key
#  expires_at   :datetime
#  last_used_at :datetime
#  metada       :jsonb
#  name         :string
#  token        :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :bigint           not null
#
# Indexes
#
#  index_api_tokens_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :api_token do
    expires_at { "2023-09-12 09:51:23" }
    last_used_at { "2023-09-12 09:51:23" }
    metada { "" }
    name { "MyString" }
    token { "MyString" }
    user { nil }
  end
end
