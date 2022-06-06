class TasksController < ApplicationController
  before_action :authenticate_user
  before_action :set_task, only: [:update]

  def create
    task = current_user.tasks.new(task_params)

    if task.save
      redirect_to root_path
    else
      redirect_to root_path, inertia: { errors: better_errors(task.errors) }
    end
  end

  def update
    if @task.update(task_params)
      redirect_to root_path
    else
      redirect_to root_path, inertia: { errors: better_errors(@task.errors) }
    end
  end

  private

  def task_params
    data = params.require(:task).permit(:name, :description, :completed_at, :due_date).to_h
    data['completed_at'] = Time.at(data['completed_at'].to_i / 1000) if data.key?('completed_at')
    data['due_date'] = Time.at(data['due_date'].to_i / 1000) if data.key?('due_date')
    data
  end

  def set_task
    @task = Task.find(params[:id])
  end
end
