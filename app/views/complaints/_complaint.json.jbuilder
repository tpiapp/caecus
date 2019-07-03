json.extract! complaint, :id, :department, :city, :date_event, :email, :description, :file, :clasification, :organization, :created_at, :updated_at
json.url complaint_url(complaint, format: :json)
