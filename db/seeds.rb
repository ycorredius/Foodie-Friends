# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# @recipes = Recipe.find_recipie_by_main_ingredient('beef')

admin = User.find_or_create_by(email: 'test@example.com') do |user|
  # user.skip_confirmation!
  user.first_name = Faker::Name.first_name
  user.about = Faker::Lorem.paragraph(sentence_count: 8)
  user.last_name = Faker::Name.last_name
  user.password = 'password'
  user.password_confirmation = 'password'
end

5.times do
  admin.recipes.create(name: Faker::Food.dish, instructions: Faker::Food.description)
end

%w[indian chinese italian mexican].each do |category|
  Category.find_or_create_by(tag: category)
end

5.times do
  user = User.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    about: Faker::Lorem.paragraph(sentence_count: 8),
    password: 'password',
    password_confirmation: 'password'
  )
  5.times do
    user.recipes.create(name: Faker::Food.dish, instructions: Faker::Food.description)
  end
end

User.last(5).each do |user|
  admin.invitations.create!(friend_id: user.id, confirmed: true)
end

# [
#   { strMeal: 'Baked salmon with fennel & tomatoes',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/1548772327.jpg", idMeal: '52959' },
#   { strMeal: 'Cajun spiced fish tacos',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/uvuyxu1503067369.jpg", idMeal: '52819' },
#   { strMeal: 'Escovitch Fish', strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/1520084413.jpg",
#     idMeal: '52944' },
#   { strMeal: 'Fish fofos',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/a15wsa1614349126.jpg", idMeal: '53043' },
#   { strMeal: 'Fish pie', strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/ysxwuq1487323065.jpg",
#     idMeal: '52802' },
#   { strMeal: 'Fish Stew with Rouille',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/vptqpw1511798500.jpg", idMeal: '52918' },
#   { strMeal: 'Garides Saganaki',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/wuvryu1468232995.jpg", idMeal: '52764' },
#   { strMeal: 'Grilled Portuguese sardines',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/lpd4wy1614347943.jpg", idMeal: '53041' },
#   { strMeal: 'Honey Teriyaki Salmon',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/xxyupu1468262513.jpg", idMeal: '52773' },
#   { strMeal: 'Kedgeree', strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/utxqpt1511639216.jpg",
#     idMeal: '52887' },
#   { strMeal: 'Kung Po Prawns', strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/1525873040.jpg",
#     idMeal: '52946' },
#   { strMeal: 'Laksa King Prawn Noodles',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/rvypwy1503069308.jpg", idMeal: '52821' },
#   { strMeal: 'Mediterranean Pasta Salad',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/wvqpwt1468339226.jpg", idMeal: '52777' },
#   { strMeal: 'Mee goreng mamak',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/xquakq1619787532.jpg", idMeal: '53048' },
#   { strMeal: 'Nasi lemak',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/wai9bw1619788844.jpg", idMeal: '53051' },
#   { strMeal: 'Portuguese fish stew (Caldeirada de peixe)',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/do7zps1614349775.jpg", idMeal: '53045' },
#   { strMeal: 'Recheado Masala Fish',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/uwxusv1487344500.jpg", idMeal: '52809' },
#   { strMeal: 'Salmon Avocado Salad',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/1549542994.jpg", idMeal: '52960' },
#   { strMeal: 'Salmon Prawn Risotto',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/xxrxux1503070723.jpg", idMeal: '52823' },
#   { strMeal: 'Saltfish and Ackee',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/vytypy1511883765.jpg", idMeal: '52936' }, 
#   { strMeal: "Seafood fideu\u00e0",
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/wqqvyq1511179730.jpg", idMeal: '52836' },
#   { strMeal: 'Shrimp Chow Fun',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/1529445434.jpg", idMeal: '52953' },
#   { strMeal: 'Sledz w Oleju (Polish Herrings)',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/7ttta31593350374.jpg", idMeal: '53023' },
#   { strMeal: 'Spring onion and prawn empanadas',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/1c5oso1614347493.jpg", idMeal: '53040' },
#   { strMeal: 'Sushi', strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/g046bb1663960946.jpg",
#     idMeal: '53065' },
#   { strMeal: 'Three Fish Pie',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg", idMeal: '52882' },
#   { strMeal: 'Tuna and Egg Briks',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/2dsltq1560461468.jpg", idMeal: '52975' },
#   { strMeal: 'Tuna Nicoise',
#     strMealThumb: "https:\/\/www.themealdb.com\/images\/media\/meals\/yypwwq1511304979.jpg", idMeal: '52852' }
# ].each do |recipe|
#   Recipe.find_or_create_by(name: recipe[:strMeal]) do |r|
#     r.instructions = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in est a mi gravida laoreet et at sapien. Sed dapibus.'
#     r.ingredients = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in est a mi gravida laoreet et at sapien. Sed dapibus.'
#     r.categories = Category.all
#     r.user = User.first
#     r.avatar = recipe[:strMealThumb]
#   end
# end
