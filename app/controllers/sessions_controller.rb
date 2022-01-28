class SessionsController < ApplicationController

  # skip_before_action :authorized, only: :create

    def login
      user = User.find_by_username(params[:username])
        if user.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :ok
        else
          render json: { error: "Invalid Email Address or Password" }, status: :unauthorized
        end
    end

    def logout
        if user&.authenticate(params[:password])
          session.delete :user_id
          head :no_content
        else
          render json: {error: "Unauthorized Access"}, status: :unauthorized
        end
      end
      
  end