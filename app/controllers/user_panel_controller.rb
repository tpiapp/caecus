class UserPanelController < ApplicationController

    def index
        @complaints = Complaint.show_all
    end

end
