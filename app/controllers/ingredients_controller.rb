class IngredientsController < ApplicationController
    def destroy
        @ingredient = Ingredient.find_by_id(params[:id])
        if @ingredient.destroy  
            flash[:success] = 'Ingredient was successfully deleted.'
        else
            flash[:error] = 'Something went wrong'
        end
    end
    
end
