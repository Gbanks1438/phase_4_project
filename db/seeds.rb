puts "🏕 Seeding customers..."
customerTesting = Customer.create(username: "noone@nowhere.com", password: "Trythi$1")
# customer1 = Customer.create(first_name: 'Caitlin', last_name: "Bonks", username: "noone@nowhere.com", password: "123Works4me$", password_confirmation:"")
# customer2 = Customer.create(first_name: 'Grogory', last_name: "Baker", username: "notwo@nowhere.com", password: "123Works4me$", password_confirmation:"")
# customer3 = Customer.create(first_name: 'Mollory', last_name: "Snow", username: "nothree@nowhere.com", password: "123Works4me$", password_confirmation:"")
# customer4 = Customer.create(first_name: 'Minifer', last_name: "Snow", username: "nofour@nowhere.com", password: "123Works4me$", password_confirmation:"")
# customer5 = Customer.create(first_name: 'Ressica', last_name: "Evanswom", username: "nofive@nowhere.com", password: "123Works4me$", password_confirmation:"")
# customer6 = Customer.create(first_name: 'Even', last_name: "Whoson", username: "nosix@nowhere.com", password: "123Works4me$", password_confirmation:"")
# customer7 = Customer.create(first_name: 'JaHanta', last_name: "Inkdom", username: "noseven@nowhere.com", password: "Trythi$1", password_confirmation:"")

puts "🏕 Seeding sales..."

puts "🏕 Seeding products..."
product1 = Product.create(image_url: "https://cfcdn.zulily.com/images/cache/product/452x1000/2777/MANHATTANTOY_145080_1367868132.jpg" , name: "Glurp", product_sku: 06660, brand: "Glorp Corp.", category: "Glerms", price: 21.99)
product2 = Product.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStTZ_ImAqiLhNMxsqmMkVcsLqaTVJ7OUphznfgNPUynFXAcv8n8AHJ3pHzEqn7hQid9Uk&usqp=CAU", name: "Slurp", product_sku: 12345, brand: "Glorp Corp.", category: "Gricks", price: 99.99)
product3 = Product.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyq2PGjZA0e1YfndgrhGelyWUVKUd82YIviLUV6aUNow2jZnvHqymXunbOpbQyhO754ps&usqp=CAU", name: "Zlerg", product_sku: 01101, brand: "Glorp Corp.", category: "Gringods", price: 209.99)
product4 = Product.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQReEqbGgLzSOeMkwfCRh8wA31WP5gjjXIDUJTCbA2x4crplOheuXTJhxOq7xvPddeLm6A&usqp=CAU", name: "Hlerg", product_sku: 90210, brand: "Glorp Corp.", category: "Groks", price: 299.99)
product5 = Product.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRomhM-JD6gUiXEsL1IO440SbW8qQL0qdayrGlftE2LfWJGsINDWITJYXtctVNtRk5Am-M&usqp=CAU", name: "Pouaque", product_sku: 30672, brand: "Glink Inc.", category: "Gringods", price: 243.00)
product6 = Product.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yytxErhUHUKjIpFqiARE1hyVRLeayRWwS_njAmdiHsI6FfVRZnK2jOZ_eXjKr7YgbRw&usqp=CAU", name: "Slouque", product_sku: 54039, brand: "Glink Inc.", category: "Gricks", price: 143.00)
product7 = Product.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7p1Q_V2Ls4wELT_5sO_e8gxE9DO3Avbp0A&usqp=CAU", name: "Batma", product_sku: 23055, brand: "Glink Inc.", category: "Groks", price: 343.00)
product8 = Product.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpcUlFd4t-WtdXggHQ8mBpJLgqLqhkLCXByg&usqp=CAU", name: "Quaftma", product_sku: 73255, brand: "Glink Inc.", category: "Glerms", price: 42.99)
product9 = Product.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1H7Z_PIs0Oaxltcbshzy2GKKs7JINGJjrBw&usqp=CAU", name: "Hortz", product_sku: 45560, brand: "Gerg & Co.", category: "Gringods", price: 300.00)
product10 = Product.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTKOc3MrAjge8Bs1847WfkSJVDyOPKCs7tg&usqp=CAU", name: "Lortz", product_sku: 11111, brand: "Gerg & Co.", category: "Gricks", price: 200.00)
product11 = Product.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxXDYxlMbg0jKrNqmLTLsbhttTod7RLAmJg&usqp=CAU", name: "Scort", product_sku: 60297, brand: "Gerg & Co.", category: "Groks", price: 400.00)
product12 = Product.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzufPS66rmSy7TsrxkSk0PLXlsdtgztOioA&usqp=CAU", name: "Schoch", product_sku: 83075, brand: "Gerg & Co.", category: "Glerms", price: 100.00)
puts "✅ Done seeding!"