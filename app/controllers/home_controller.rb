class HomeController < ApplicationController
  def index
  end

  # Get game initial data
  def startGame
    message = MSG_WELCOME
    success = true
    data = {
      :version => BOGGLE_VERSION,
      :gameTime => GAME_TIME,
      :maxWord => MAX_WORD_LENGTH,
      :minWord => MIN_WORD_LENGTH,
    }
    response_data = ResponseModel.new(message, success, data)

    render json: response_data, status: STATUS_OK
  end
end
