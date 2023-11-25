class User::FriendsController < ApplicationController
	def index
		@friends = current_user.friends
		@pending_invitations = current_user.pending_invitations
	end
end
