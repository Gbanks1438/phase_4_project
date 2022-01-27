class SalesController < ApplicationController
    # before_action :authorized

    def index
        render json: Sale.all
    end

    def show
        sale = Sale.find_by_id(params[:id])
        if sale
            render json: sale
        else
            render json: {"error": "Sale not found"}, status: :not_found
        end
    end

    # private

    # def authorized
    #   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    # end
    
end
