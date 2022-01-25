class SaleSerializer < ActiveModel::Serializer
  attributes :id, :date_of_sale, :total
  has_one :customer
  has_one :product
end
