class Product < ApplicationRecord
    has_many :sales
    has_many :customers, through: :sales

    validates :image_url, :name, :product_sku, :brand, :category, :price, presence: true
    validates :image_url, :name, :product_sku, uniqueness: true
    validates :name, :product_sku, :brand, :category, :price, length: { in: 0..50 }
end
