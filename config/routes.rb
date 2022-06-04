Rails.application.routes.draw do
  get 'pages/index'
  get '/about', to: 'pages#about'
  root 'pages#index'
  get '/register', to: 'users#new'
  resources :users, only: %i[new create]
  get '/login', to: 'sessions#new'
  resources :sessions, only: %i[new create]
end
