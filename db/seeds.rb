puts "🏕 Seeding customers..."
customer1 = Customer.create(first_name: 'Caitlin', last_name: "Bonks", email_address: "noone@nowhere.com")
customer2 = Customer.create(first_name: 'Grogory', last_name: "Baker", email_address: "notwo@nowhere.com")
customer3 = Customer.create(first_name: 'Mollory', last_name: "Snow", email_address: "nothree@nowhere.com")
customer4 = Customer.create(first_name: 'Minifer', last_name: "Snow", email_address: "nofour@nowhere.com")
customer5 = Customer.create(first_name: 'Ressica', last_name: "Evanswom", email_address: "nofive@nowhere.com")
customer6 = Customer.create(first_name: 'Even', last_name: "Whoson", email_address: "nosix@nowhere.com")
customer7 = Customer.create(first_name: 'JaHanta', last_name: "Inkdom", email_address: "noseven@nowhere.com")

puts "🏕 Seeding sales..."

puts "🏕 Seeding products..."
product1 = Product.create(name: "Glurp", product_sku: 06660, brand: "Glorp Corp.", category: "Glerms", price: 21.99)
product2 = Product.create(name: "Slurp", product_sku: 12345, brand: "Glorp Corp.", category: "Gricks", price: 99.99)
product3 = Product.create(name: "Zlerg", product_sku: 01101, brand: "Glorp Corp.", category: "Gringods", price: 209.99)
product4 = Product.create(name: "Hlerg", product_sku: 90210, brand: "Glorp Corp.", category: "Groks", price: 299.99)
product5 = Product.create(name: "Pouaque", product_sku: 30672, brand: "Glink Inc.", category: "Gringods", price: 243.00)
product6 = Product.create(name: "Slouque", product_sku: 54039, brand: "Glink Inc.", category: "Gricks", price: 143.00)
product7 = Product.create(name: "Batma", product_sku: 23055, brand: "Glink Inc.", category: "Groks", price: 343.00)
product8 = Product.create(name: "Quaftma", product_sku: 73255, brand: "Glink Inc.", category: "Glerms", price: 42.99)
product9 = Product.create(name: "Hortz", product_sku: 45560, brand: "Gerg & Co.", category: "Gringods", price: 300.00)
product10 = Product.create(name: "Lortz", product_sku: 11111, brand: "Gerg & Co.", category: "Gricks", price: 200.00)
product11 = Product.create(name: "Scort", product_sku: 60297, brand: "Gerg & Co.", category: "Groks", price: 400.00)
product12 = Product.create(name: "Schoch", product_sku: 83075, brand: "Gerg & Co.", category: "Glerms", price: 100.00)
puts "✅ Done seeding!"