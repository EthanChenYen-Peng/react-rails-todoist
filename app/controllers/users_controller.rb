class UsersController < ApplicationController
  def new
    render inertia: 'Register'
  end

  def create
    binding.pry
  end
end
