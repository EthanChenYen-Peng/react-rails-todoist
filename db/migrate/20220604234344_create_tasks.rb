class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.belongs_to :user
      t.string :name, null: false
      t.string :description
      t.string :completed_at

      t.timestamps
    end
  end
end
