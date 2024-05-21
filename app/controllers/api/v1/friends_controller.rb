class Api::V1::FriendsController < Api::BaseController
  def index
    render json: {
      friends: @user.friends
    }, status: :ok
  end

  def create
    invite = Invitation.find_by(user_id: @user.id, friend_id: params[:id])
    if invite
      @user.accept_invitation(User.find(params[:id]))
      render json: {message: "Friend added"}
    else
      @user.send_invitation(User.find(params[:id]))
      render json: {message: "Friend request sent"}
    end
  end

  def destroy
    invitation = Invitation.find_by(user_id: @user.id, friend_id: params[:id])
    if invitation
      invitation.destroy
      render json: {message: "Friend removed"}
    else
      render json: {message: "Friend not found"}
    end
  end
end
