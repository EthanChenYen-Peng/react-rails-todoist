require 'rails_helper'

RSpec.describe User, type: :model do
  it 'validates username' do
    user = build(:user, username: '')
    expect(user.valid?).to be_falsy
  end
end
