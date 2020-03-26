Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "home/startGame", to: "home#startGame"

  namespace :v1, defaults: { format: "json" } do
    get "game", to: "game#index"
    get "game/getGameData", to: "game#getGameData"
    get "game/checkWord", to: "game#checkWord"
  end

  get "*page", to: "home#index", constraints: ->(req) do
                 !req.xhr? && req.format.html?
               end

  root "home#index"
end
