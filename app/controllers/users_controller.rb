class UsersController < ApplicationController
  def new
    render inertia: 'Register'
  end

  def create
    user = User.new user_params

    if user.save
      redirect_to root_path
    else
      redirect_to new_user_path, inertia: { errors: better_errors(user.errors) }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
