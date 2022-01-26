class ProductSerializer < ActiveModel::Serializer
  attributes :image_url, :id, :name, :brand, :category, :product_sku, :price
end
