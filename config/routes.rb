Rails.application.routes.draw do
  
  resources :sales, only: [:index, :show] 
  resources :products, only: [:index, :show, :update]
  resources :customers, only: [:index, :show, :create, :update, :destroy]
  resources :sessions, only: [:create, :destroy]
  resources :users, only: [:show]

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
  post "/signup", to: "customers#create"
  get "/me", to: "customers#show"
  delete "/me", to: "customers#destroy"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
