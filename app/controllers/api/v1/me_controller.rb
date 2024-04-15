class Api::V1::MeController < Api::BaseController
  def show
    render json: UserSerializer.new(@user).serialized_json
  end
end
