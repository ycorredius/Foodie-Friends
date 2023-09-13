class Api::ListingsController < Api::BaseController

  def create
    listing = Proposal.new listing_params
    listing.proposal_type = 'listing'
    if listing.save
      render json: listing.as_json
    else
      render json: listing.errors.messages.to_json, status: :unprocessable_entity
    end
  end

  def destroy
    listing = Proposal.find_by(hex_id: params[:id])
    if listing.destroy
      head :ok
    end
  end

  private

  def listing_params
    params.permit(:headline, :location, :organizer_message, :about_description, :agent_image, :organizer_image, :display_credit_score, :price_target, :number_of_coowners, :step, :total_sqft, :bathroom, :bedrooms, :interest, :fenced_yard, :basement, :has_dock, :has_fire_place, :has_game_room, :has_hot_tub, :has_pool, :has_porch, :has_waterfront, :no_alcohol, :firearms, :no_outside_guest, :no_pets, :no_recreational_drugs, :renting_allowed, :no_smoking, :all_pets_allowed, :dogs_only, :no_pets, :agent_name, :agent_firm, :agent_firm_website)
  end

end
