class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :category, :product_sku, :price
end
