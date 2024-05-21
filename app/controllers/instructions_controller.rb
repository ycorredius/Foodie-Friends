class InstructionsController < ApplicationController
  def destroy
    @instructions = Instruction.find_by_id(params[:id])
    if @instructions.destroy
      flash[:success] = 'Instruction was successfully deleted.'
    else
      flash[:error] = 'Something went wrong'
    end
  end
end
