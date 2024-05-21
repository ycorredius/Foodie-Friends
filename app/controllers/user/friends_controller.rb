class User::FriendsController < ApplicationController
  before_action :set_invitation, only: :destroy

  def index
    @friends = current_user.friends
    @pending_invitations = current_user.pending_invitations
  end

  def destroy
    @invitation.destroy
    render turbo_stream: turbo_stream.update("friends", partial: "friends", locals: {friends: current_user.friends})
  end

  private

  def set_invitation
    @invitation = params[:id] ? Invitation.find_invitation(current_user, params[:id]) : Invitation.find_invitation(current_user, params[:user_id])
  end
end
