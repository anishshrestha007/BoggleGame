class V1::GameController < ApplicationController
  def index
  end

  # Gets Game Data
  # Url: /v1/game/getGameData
  # Description: Get a new set of words based on the provided matrix size
  def getGameData
    length = params[:length]
    status = STATUS_OK
    can_proceed = true
    error_msg = ""
    response_data = nil

    # CHECK IF THE PARAMETER IS PROVIDED
    if !params.has_key?(:length) || length.nil?
      error_msg = MSG_LENGTH_NOT_PROVIDED
      can_proceed = false
      status = STATUS_BAD_REQUEST  # Bad request
    end

    # CHECK IF THE PARAMETER IS AN ACCEPTABLE NUMBER
    if can_proceed && (!is_number?(length) || length.to_i < MIN_WORD_LENGTH || length.to_i > MAX_WORD_LENGTH)
      error_msg = MSG_BOARD_LENGTH_INVALID
      can_proceed = false
      status = STATUS_BAD_REQUEST # Bad request
    end

    if can_proceed
      length = length.to_i

      nextChunk = BOGGLE_STRING.split("").sample(length * length).join("")

      message = MSG_GAME_RETRIEVED
      success = true
      data = {
        :game_data => nextChunk,
      }
      response_data = ResponseModel.new(message, success, data)
    else
      response_data = ResponseModel.new(error_msg, false, nil)
    end

    render json: response_data, status: status
  end

  # Checks a word
  # Url: /v1/game/checkWord
  # Description:
  # 1. Checks if the submitted word is correct or not
  # 2. Provide a score accordingly
  def checkWord
    word = params[:word]
    status = STATUS_OK
    can_proceed = true
    error_msg = ""
    response_data = nil

    if !params.has_key?(:word) || word.nil?
      error_msg = MSG_EVALUATION_WORD_EMPTY
      can_proceed = false
      status = STATUS_BAD_REQUEST  # Bad request
    end

    if can_proceed and word.length < MIN_WORD_LENGTH
      error_msg = MSG_LENGTH_TOO_SMALL
      can_proceed = false
      status = STATUS_BAD_REQUEST # Bad request
    end

    if can_proceed
      # Checks the word with a score

      response = DICTIONARY.include?(word)

      score = 0
      if response == true
        score = word.size - 2

        if score < 1
          score = 1
        end

        if score > 6
          score = 6
        end
      end

      message = MSG_EVALUATION_SUCCESS
      success = true
      data = {
        :is_correct => response,
        :score => score,
      }

      response_data = ResponseModel.new(message, success, data)
    else
      response_data = ResponseModel.new(error_msg, false, nil)
    end

    render json: response_data, status: status
  end

  #######################################
  # HELPER METHODS
  #######################################

  def is_number?(string)
    true if Float(string) rescue false
  end
end
