class Customer < ApplicationRecord
    has_many :sales, dependent: :destroy
    has_many :products, through: :sales

    has_secure_password

    validates :username, :password, presence: true
    validates :username, uniqueness: true
    validates :username, :password, :password_confirmation, length: { in: 0..50 }
end

