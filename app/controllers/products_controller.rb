class ProductsController < ApplicationController

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
        params.permit(:name, :product_sku, :brand, :category, :price)
      end
      
end
