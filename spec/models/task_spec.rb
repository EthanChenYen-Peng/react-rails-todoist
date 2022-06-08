# == Schema Information
#
# Table name: tasks
#
#  id           :bigint           not null, primary key
#  user_id      :bigint
#  name         :string           not null
#  description  :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  completed_at :datetime
#  due_date     :datetime
#  priority     :integer          default("p4")
#
require 'rails_helper'

RSpec.describe Task, type: :model do
  it 'validates name' do
    user = create(:user)
    task = user.tasks.new
    expect(task.valid?).to be_falsy
    expect(task.errors).to have_key(:name)
  end

  describe 'completed?' do
    let(:task) { create(:task, :with_user) }
    subject { task.completed? }

    context 'new task' do
      it { is_expected.to be_falsy }
    end

    context 'is completed' do
      before do
        task.complete!
      end

      it { is_expected.to be_truthy }
    end
  end

  describe 'scope completed' do
    it 'returns only completed task' do
      task1 = create(:task, :with_user)
      task2 = create(:task, :with_user)
      task3 = create(:task, :with_user)
      task1.complete!
      task3.complete!
      tasks = Task.completed
      expect(tasks).to include(task1, task3)
      expect(tasks).not_to include(task2)
    end
  end

  describe 'priority' do
    it 'defaults to p4' do
      task = create(:task, :with_user)
      expect(task.priority_p4?).to be_truthy
    end

    it 'can change priority' do
      task = create(:task, :with_user)
      task.priority_p1!
      expect(task.priority_p1?).to be_truthy
    end
  end
end
