require 'rails_helper'

RSpec.describe "Friends", type: :request do
  
  before(:all) do
    @user_1 = FactoryBot.create(:random_user, :with_api_token)
    @user_2 = FactoryBot.create(:random_user, :with_api_token)
    sign_in @user_1
  end

  describe "POST /create" do
    it "returns http success" do
      post api_v1_user_friends_path(id: @user_2.id ), headers: { 'Authorization': "Bearer #{@user_1.api_tokens.last.token} "}
      expect(response).to have_http_status(:success)
      @user_2.accept_invitation(@user_1)
      expect(@user_1.friends.count).to eq(1)
    end
  end

  describe "GET /index" do
    it "returns all user's friends" do
      get api_v1_user_friends_path, headers: {'Authorization': " Bearer #{@user_1.api_tokens.last.token}"}
      expect(response).to have_http_status(:success)
      parsed_response = JSON.parse(response.body)
      expect(parsed_response["friends"].count).to eq(0)
    end
  end

  describe "DELETE /destroy" do
      it "returns http success" do
        @user_1.send_invitation(@user_2)
        @user_2.accept_invitation(@user_1)
        expect(@user_1.friends.count).to eq(1)
        delete api_v1_user_friend_path(@user_2.id), headers: {'Authorization': " Bearer #{@user_1.api_tokens.last.token}"}
        expect(response).to have_http_status(:success)
        expect(@user_1.friends.count).to eq(0)
      end
  end
end
