Rails.application.routes.draw do
  get 'pages/index'
  get '/about', to: 'pages#about'
  root 'pages#index'
end
