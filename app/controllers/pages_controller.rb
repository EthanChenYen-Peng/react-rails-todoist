class PagesController < ApplicationController
  def index
    render inertia: 'Home'
  end

  def about
    render inertia: 'About'
  end
end
