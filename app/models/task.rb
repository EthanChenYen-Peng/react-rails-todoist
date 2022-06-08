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
class Task < ApplicationRecord
  validates :name, presence: true
  belongs_to :user
  enum priority: {
    p4: 4,
    p3: 3,
    p2: 2,
    p1: 1
  }, _prefix: true

  scope :completed, -> { where.not(completed_at: nil) }
  scope :not_completed, -> { where(completed_at: nil) }

  def completed?
    !completed_at.nil?
  end

  def complete!
    update!(completed_at: Date.current)
  end
end
