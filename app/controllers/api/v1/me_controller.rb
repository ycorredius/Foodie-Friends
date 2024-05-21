# frozen_string_literal: true

module Api
  module V1
    class MeController < Api::BaseController
      def show
        render json: UserSerializer.new(@user).serializable_hash.to_json
      end
    end
  end
end
