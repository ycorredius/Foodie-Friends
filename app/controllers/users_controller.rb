class UsersController < ApplicationController
    def create
        @user = User.new(params[:user])
        if @user.save
          flash[:success] = "User successfully created"
          redirect_to @user
        else
          flash[:error] = "Something went wrong"
        end
    end

end
