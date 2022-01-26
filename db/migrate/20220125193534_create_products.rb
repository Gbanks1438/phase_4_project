class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :image_url
      t.string :name
      t.string :brand
      t.string :category
      t.integer :product_sku
      t.float :price

      t.timestamps
    end
  end
end
