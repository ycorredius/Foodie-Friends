json.cache! [user] do
  json.extract! user, :id, :full_name, :last_name
  json.image user.image
  json.name user.full_name
  json.friends user.friends
end
