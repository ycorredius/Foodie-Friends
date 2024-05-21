json.cache! [user] do
  json.extract! user, :first_name, :last_name
  json.image user.avatar.attached? ? url_for(user.avatar) : nil
  json.name user.full_name
  json.email user.email
  json.friends user.friends
end
