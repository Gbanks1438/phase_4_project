class ApplicationController < ActionController::API
  include ActionController::Cookies

  # before_action :authorized

  private

  def current_user
    Customer.find_by_id(session[:user_id])
  end

  # def authorized
  #   return render json:{error: "Not Authorized"}, status: :unauthorized
  #   unless session.include? :user_id
  # end

end
