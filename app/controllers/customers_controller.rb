class CustomersController < ApplicationController
    # before_action :authorized
    # skip_before_action :authorize, only: :create
    
    def index
        render json: Customer.all
    end

    def show
        render json: @current_user
    end

    # def show
    #     customer = Customer.find_by_id(params[:id])
    #     if customer
    #         render json: customer
    #     else
    #         render json: {error: "Customer not found"}, status: :not_found
    #     end
    # end

    def create
        new_customer = Customer.new(customer_params)
        if new_customer.save
            render json: new_customer, status: :created
        else
            render json: {errors: new_customer.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        customer = Customer.find_by_id(params[:id])
        if customer
          customer.update(customer_params)
          render json: customer
        else
          render json: { error: "Customer not found" }, status: :not_found
        end
    end

    def destroy
        customer_to_delete = Customer.find_by_id(params[:id])
        if customer_to_delete
            customer_to_delete.destroy
            head :no_content
        else
            render json: {error: "Customer not found"}, status: :not_found
        end
    end

    private

    def customer_params
        params.permit(:username, :password, :password_confirmation)
    end

    # def authorized
    #     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    # end
    
end
 
