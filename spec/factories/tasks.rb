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
#
FactoryBot.define do
  factory :task do
    name { Faker::Lorem.sentence }
    description { Faker::Lorem.sentence }

    trait :with_user do
      user { create(:user) }
    end
  end
end
