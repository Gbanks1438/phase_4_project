class Customer < ApplicationRecord
    has_many :sales, dependent: :destroy
    has_many :products, through: :sales

    validates :first_name, :last_name, :email_address, presence: true
    validates :first_name, :last_name, :email_address, uniqueness: true
    validates :first_name, :last_name, :email_address, length: { in: 0..50 }
end

