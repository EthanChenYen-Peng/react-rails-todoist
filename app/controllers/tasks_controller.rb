class TasksController < ApplicationController
  before_action :authenticate_user

  def create
    task = current_user.tasks.new(task_params)

    if task.save
      redirect_to root_path
    else
      redirect_to root_path, inertia: { errors: better_errors(task.errors) }
    end
  end

  private

  def task_params
    params.require(:task).permit(:name, :description)
  end
end
