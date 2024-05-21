class CategoriesController < ApplicationController
  def destroy
    @category = Category.find_by_id(params[:id])
    if @category.destroy
      flash[:success] = 'Object was successfully deleted.'
      render json: @category
    else
      flash[:error] = 'Something went wrong'
    end
  end
end
