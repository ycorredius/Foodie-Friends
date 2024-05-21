class Api::V1::MeController < Api::BaseController
  def show
    render json: UserSerializer.new(@user).serializable_hash.to_json
  end
end
