module ApplicationHelper
  include Pagy::Frontend

  def avatar_url(resource)
    if resource.class == User
      resource.avatar.blob
    else
      resource.image.attached? ? resource.image.blob : resource.avatar
    end
  end

  def active_tab(path)
    current_page?(path) ? "border-indigo-500 text-indigo-600 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium" : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
  end
end
