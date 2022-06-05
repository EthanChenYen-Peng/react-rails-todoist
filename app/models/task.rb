class Task < ApplicationRecord
  validates :name, presence: true
  belongs_to :user

  scope :completed, -> { where.not(completed_at: nil) }
  scope :not_completed, -> { where(completed_at: nil) }

  def completed?
    !completed_at.nil?
  end

  def complete!
    update!(completed_at: Date.current)
  end
end
