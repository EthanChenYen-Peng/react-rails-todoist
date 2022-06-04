class UsersController < ApplicationController
  def new
    render inertia: 'Register'
  end
end
