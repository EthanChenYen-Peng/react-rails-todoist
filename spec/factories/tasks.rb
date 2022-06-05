FactoryBot.define do
  factory :task do
    name { Faker::Lorem.sentence }
    description { Faker::Lorem.sentence }

    trait :with_user do
      user { create(:user) }
    end
  end
end
