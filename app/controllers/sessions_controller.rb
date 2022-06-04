class SessionsController < ApplicationController
  def new
    render inertia: 'Login'
  end

  def create
    user = User.find_by(email: user_params[:email])
    if user&.authenticate(user_params[:password])
      session[:user_id] = user.id
      redirect_to root_path
    else
      redirect_to new_session_path, inertia: { errors: 'Invalid credentials' }
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to new_session_path
  end

  def user_params
    params.require(:user).permit(:password, :email)
  end
end
