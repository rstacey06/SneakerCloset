# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Brand.destroy_all
Shoe.destroy_all

brand1 = Brand.create(name: "Nike")
brand2 = Brand.create(name: "Jordan")
brand3 = Brand.create(name: "Adidas")
brand4 = Brand.create(name: "Rebock")
brand5 = Brand.create(name: "Vans")


Shoe.create(name: "Flyknit", style: "Running", colorway: "White", condition: "new", size: "12", brand: brand1)
Shoe.create(name: "Airmax", style: "walking", colorway: "black", condition: "Used", size: "11", brand: brand1)
Shoe.create(name: "1's", style: "Basketball", colorway: "multi", condition: "Old", size: "13", brand: brand2)
Shoe.create(name: "2's", style: "Basketball", colorway: "indigo", condition: "Worn", size: "12", brand: brand2)
