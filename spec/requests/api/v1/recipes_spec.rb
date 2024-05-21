require "rails_helper"

RSpec.describe "Api::V1::Recipes", type: :request do
  before(:all) do
    @user = create(:user)
    create(:recipe, user: @user)
    create(:recipe, user: @user)
  end

  describe "GET /index" do
    it "retrieve all recipes" do
      get api_v1_recipes_path
      expect(response).to have_http_status(:success)
      expect(@user.recipes.count).to eq(2)
    end
  end
end
