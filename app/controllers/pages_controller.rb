class PagesController < ApplicationController
  def index
    if current_user
      tasks = current_user.tasks.not_completed

      render inertia: 'Dashboard', props: {
        tasks: tasks.as_json
      }
    else
      render inertia: 'Home'
    end
  end

  def about
    render inertia: 'About'
  end
end
