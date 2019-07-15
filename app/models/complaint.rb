class Complaint < ApplicationRecord
    def self.show_all
        return Complaint.all
    end
end
