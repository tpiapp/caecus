Rails.application.routes.draw do
  resources :complaints
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/complaint_form' =>'complaints#complaint_form', :as => :complaint_form
  get '/completed' => 'complaints#complaint_completed', :as => :completed
  get '/confirmation' =>'complaints#confirmation', :as => :confirmation
  get '/user_panel' => 'user_panel#index', :as => :user_panel
 

  
  root "landing_page#index"


end
