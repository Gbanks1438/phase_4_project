class ProductsController < ApplicationController
  # before_action :authorized
  # skip_before_action :authorized, only: :index

    # CRUD = Read
    def index
        render json: Product.all
    end

    def show
        product = Product.find_by_id(params[:id])
        if product
            render json: product
        else
            render json: {"error": "Product not found"}, status: :not_found
        end
    end

    def update
        product = Product.find_by_id(params[:id])
        if product
          product.update(product_params)
          render json: product
        else
          render json: { "error": "Product not found" }, status: :not_found
        end
    end

    private
      
      def product_params
        params.permit(:image_url, :name, :product_sku, :brand, :category, :price)
      end

      # def authorized
      #   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      # end
      
end
