class CreateSales < ActiveRecord::Migration[6.1]
  def change
    create_table :sales do |t|
      t.string :date_of_sale
      t.float :total
      t.belongs_to :customer, null: false, foreign_key: true
      t.belongs_to :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
