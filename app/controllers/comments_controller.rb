class CommentsController < ApplicationController
  before_action :set_recipe

  def create
    @comment = @recipe.comments.build(user: current_user, content: comments_params[:content])
    if @comment.save
      render turbo_stream: turbo_stream.replace("comments", partial: "recipes/comments/comments", locals: {recipe_id: @recipe.id, comments: @recipe.comments.order(created_at: :desc)})
    else
      @errors = @comment.errors.full_messages
    end
  end

  private

  def comments_params
    params.require(:comment).permit(:content)
  end

  def set_recipe
    @recipe = Recipe.find(params[:recipe_id])
  end
end
