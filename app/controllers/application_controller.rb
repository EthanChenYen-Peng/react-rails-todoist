class ApplicationController < ActionController::Base
  inertia_share user: -> { current_user }
  def current_user
    return unless session[:user_id]

    # Use find_by to not raise error when no record found.
    User.find_by(id: session[:user_id])
  end

  def authenticate_user
    redirect_to new_user_path unless current_user
  end

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
