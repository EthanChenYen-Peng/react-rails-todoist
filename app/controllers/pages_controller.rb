class PagesController < ApplicationController
  before_action :authenticate_user
  def index
    render inertia: 'Home'
  end

  def about
    render inertia: 'About'
  end
end
