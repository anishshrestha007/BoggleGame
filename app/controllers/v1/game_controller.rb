class V1::GameController < ApplicationController
  def index
    render json: {
             :things => [
               {
                 :name => "some-thing",
                 :guid => "11111-11111-11111-1111111",
               },
             ],
           }.to_json
  end
end
