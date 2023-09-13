class Api::Groups::PotentialHomesController < Api::BaseController

  def create
    plum_group = PlumGroup.where(email: params[:group_email]).first
    result = UpsertPotentialHome.new.perform(plum_group, potential_home_params, current_user)
    if result.upserted?
      render json: {
        id: result.potential_home.id,
        address: result.potential_home.address,
        baths: result.potential_home.baths,
        beds: result.potential_home.beds,
        city: result.potential_home.city,
        name: result.potential_home.name,
        price: result.potential_home.price,
        published: result.potential_home.published,
        sqft: result.potential_home.sqft,
        state: result.potential_home.state,
        url: result.potential_home.url,
        zip: result.potential_home.zip,
        image_url: result.potential_home.image_url
      }
    else
      render json: result.potential_home.errors.messages.to_json,
        status: :unprocessable_entity
    end
  end

  private

  def potential_home_params
    params.permit(
      :address,
      :baths,
      :beds,
      :city,
      :name,
      :price,
      :published,
      :sqft,
      :state,
      :url,
      :zip,
      :image_url
    )
  end

end
