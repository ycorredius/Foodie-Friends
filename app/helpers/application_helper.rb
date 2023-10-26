module ApplicationHelper
  include Pagy::Frontend

  def avatar_url(resource)
    if resource.class == User
      resource.avatar.blob
    else
      resource.image.attached? ? resource.image.blob : resource.avatar
    end
  end
end
