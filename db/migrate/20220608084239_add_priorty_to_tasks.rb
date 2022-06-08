class AddPriortyToTasks < ActiveRecord::Migration[7.0]
  def change
    add_column :tasks, :priority, :integer, default: 4
  end
end
