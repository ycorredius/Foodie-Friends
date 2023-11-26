class User::InvitationsController < ApplicationController
	before_action :set_user
	before_action :set_friend, only: [ :create, :destroy ]
	before_action :find_invitation, only: [ :update, :destroy ]

	def create
		@user.send_invitation(@friend)
		redirect_to user_path(@friend) 
	end

	def update
		if params[:response] == "accept"
			@invitation.accept
		else
			@invitation.destroy
		end
		render turbo_stream: turbo_stream.replace("invitations", partial: "invitations", pending_invitations: @user.pending_invitations)
	end

	def destroy
		@invitation.destroy
		redirect_to user_path(@friend)
	end

	private

	def set_user
		@user = User.includes(:invitations).find(current_user.id)
	end

	def set_friend
		@friend = User.find(params[:user_id])
	end

	def find_invitation
		@invitation = params[:id] ? Invitation.find_invitation(current_user, params[:id]) : Invitation.find_invitation(current_user, params[:user_id])
	end
end
