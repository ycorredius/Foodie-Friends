class Api::Mls::ListingsController < Api::BaseController
  def create
    result = UpsertMlsListing.new.perform(mls_listing_params)
    if result.upserted?
      render json: {
        baths: result.mls_listing.baths,
        beds: result.mls_listing.beds,
        city: result.mls_listing.city,
        description: result.mls_listing.description,
        latitude: result.mls_listing.latitude,
        longitude: result.mls_listing.longitude,
        mls_id: result.mls_listing.id,
        price_cents: result.mls_listing.price_cents,
        source_id: result.mls_listing.source_id,
        source_uri: result.mls_listing.source_uri,
        status: result.mls_listing.status,
        sqft: result.mls_listing.sqft,
        supplemental_text: result.mls_listing.supplemental_text,
        zip: result.mls_listing.zip,
        source_updated_at: result.mls_listing.source_updated_at,
        list_company_name: result.mls_listing.list_company_name,
        plum_score: result.mls_listing.plum_score
      }
    else
      render json: result.mls_listing.errors.messages.to_json,
        status: :unprocessable_entity
    end
  end

  private

  def mls_listing_params
    params.permit(
      :id,
      :address,
      :baths,
      :beds,
      :city,
      :description,
      :latitude,
      :longitude,
      :mls_id,
      :price_cents,
      :source_id,
      :source_uri,
      :sqft,
      :status,
      :supplemental_text,
      :zip,
      :source_updated_at,
      :list_company_name,
      :plum_score,
      :photos => [
        :caption,
        :name,
        :primary,
        :source_uri,
        :uri_1024,
        :uri_1280,
        :uri_1600,
        :uri_2048,
        :uri_300,
        :uri_640,
        :uri_800,
        :uri_large,
        :uri_thumb,
        :source_id
      ]
    )
  end
end
