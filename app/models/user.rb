# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string
#  userName        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password
    has_many :recipes

    validates :userName, presence: true
    validates :userName, uniqueness: true
    validates :email, presence: true
    validates :email, uniqueness: true	
    validates :password_digest, presence: true   

    def create_new_recipe(recipe_params)
        
        binding.pry
        
        @recipe = current_user.recipes.build(name: recipe_params[:name])
        if recipe_params[:ingredients]
          recipe_params[:ingredients].each do |f|
            @recipe.ingredients.build(name: f[:name], quantity: f[:quantity])
          end 
        end
        
        if recipe_params[:categories]
          recipe_params[:categories].each do |f|
            @recipe.categories.build(tag: f)
          end 
        end

        if recipe_params[:instructions]
          recipe_params[:instructions].each_with_index do |x|
            @recipe.instructions.build(content:x)
          end 
        end
        @recipe.image_url =  "http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6094cedb67cb21a66a2b1d6daeef7d4b93aac13a/nishaan-ahmed-Mh087eDe_qA-unsplash.jpg"
        if @recipe.save 
            binding.pry
          return @recipe
        else
          flash[:error] = "Something went wrong"
        end
    end
end
