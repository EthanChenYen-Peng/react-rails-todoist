class SessionsController < ApplicationController
  def new
    render inertia: 'Login'
  end

  def create; end
end
