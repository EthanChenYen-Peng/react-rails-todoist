require 'rails_helper'

RSpec.describe Task, type: :model do
  it 'validates name' do
    user = create(:user)
    task = user.tasks.new
    expect(task.valid?).to be_falsy
    expect(task.errors).to have_key(:name)
  end
end
