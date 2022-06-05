class PagesController < ApplicationController
  before_action :authenticate_user
  def index
    tasks = current_user.tasks.not_completed

    render inertia: 'Home', props: {
      tasks: tasks.as_json
    }
  end

  def about
    render inertia: 'About'
  end
end
