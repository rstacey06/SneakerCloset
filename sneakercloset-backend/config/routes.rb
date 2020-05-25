Rails.application.routes.draw do
  resources :brands, only: [:index, :show]
  resources :shoes, only: [:index, :new, :show, :create, :edit, :update, :destroy]
end
