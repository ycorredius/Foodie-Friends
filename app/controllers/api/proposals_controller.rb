class Api::ProposalsController < Api::PublicController
  def index
    @proposals = Proposal.where(featured: true, view_in_marketplace: true, proposal_type: "proposal").limit(10).order(weight: :desc)
    if @proposals.count == 0
      @proposals = Proposal.where(view_in_marketplace: true, proposal_type: "proposal").limit(10).order(weight: :desc)
    end
  end
end
