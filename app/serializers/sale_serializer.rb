class SaleSerializer < ActiveModel::Serializer
  attributes :id, :total
  has_one :customer
  has_many :product
end
