Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :user do
    root "user_panel#index"
  end
  
  root "landing_page#index"


end
