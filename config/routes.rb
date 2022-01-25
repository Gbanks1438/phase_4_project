Rails.application.routes.draw do
  
  resources :sales, only: [:index, :show] 
  resources :products, only: [:index, :show, :update]
  resources :customers, only: [:index, :show, :create, :update, :destroy]
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
