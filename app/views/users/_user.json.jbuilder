json.cache! [user] do
  json.extract! user, :first_name, :last_name
  json.image user.image
  json.name user.full_name
  json.email user.email
  json.friends user.friends
end
