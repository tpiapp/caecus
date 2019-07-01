Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/users_panel' =>'user_panel#index', :as => :user_panel
  get '/confirmation' =>'confirmation#index', :as => :confirmation

  
  root "landing_page#index"


end
