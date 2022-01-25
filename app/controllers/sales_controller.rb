class SalesController < ApplicationController
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
end
