class CommentsController < ApplicationController
   before_action :set_recipe

  def create
    @comment = @recipe.comments.create!(user: current_user, content: comments_params[:content])
    render turbo_stream: turbo_stream.replace("comments_form", partial: "comments/form", locals: {recipe_id: @recipe.id})
  end

  private

  def comments_params
    params.require(:comment).permit(:content)
  end

  def set_recipe
    @recipe = Recipe.find(params[:recipe_id])
  end
end
