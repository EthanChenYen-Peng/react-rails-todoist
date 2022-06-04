class ApplicationController < ActionController::Base
  private

  def better_errors(errors)
    messages = {}
    errors.messages.keys.each do |error_key|
      error_messages = errors.messages[error_key].map do |m|
        "#{error_key.to_s.capitalize} #{m}"
      end
      messages[error_key] = error_messages
    end
    messages
  end
end
