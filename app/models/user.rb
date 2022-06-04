class User < ApplicationRecord
  validates :username, presence: true
  validates :email, uniqueness: true
  validates :password_digest, presence: true
end
