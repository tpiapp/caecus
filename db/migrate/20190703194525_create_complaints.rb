class CreateComplaints < ActiveRecord::Migration[5.2]
  def change
    create_table :complaints do |t|
      t.string :department
      t.string :city
      t.datetime :date_event
      t.string :email
      t.text :description
      t.string :file
      t.string :clasification
      t.string :organization
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
