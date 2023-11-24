class User::InvitationsController < ApplicationController
	before_action :set_user
	before_action :set_friend, only: [ :create, :destroy ]
	before_action :find_invitation, only: [ :update, :destroy ]

	def create
		@user.send_invitation(@friend)
		redirect_to user_path(@friend) 
	end

	def update

	end

	def destroy
		@invitation.destroy
		redirect_to user_path(@friend)
	end

	private

	def set_user
		@user = current_user
	end

	def set_friend
		@friend = User.find(params[:user_id])
	end

	def find_invitation
		@invitation = Invitation.find_invitation(current_user, params[:user_id])
	end
end
