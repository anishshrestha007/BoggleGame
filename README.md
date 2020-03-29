[![release](https://img.shields.io/badge/release-v1.0-blue)](https://github.com/anishshrestha007/BoggleGame) [![Built-with-node](https://img.shields.io/badge/node-12.13.1-blue)](https://github.com/anishshrestha007/BoggleGame) [![Built-with-ruby](https://img.shields.io/badge/ruby-2.6.5-brightgreen)](https://github.com/anishshrestha007/BoggleGame) [![Built-with-ruby](https://img.shields.io/badge/rails-6.0.2-brightgreen)](https://github.com/anishshrestha007/BoggleGame) [![Built-with-react](https://img.shields.io/badge/react-16.12.0-brightgreen)](https://github.com/anishshrestha007/BoggleGame) [![Built-with-npm](https://img.shields.io/badge/npm-6.6.0-brightgreen)](https://github.com/anishshrestha007/BoggleGame) [![Built-with-yarn](https://img.shields.io/badge/yarn-1.21.1-brightgreen)](https://github.com/anishshrestha007/BoggleGame) [![license](https://img.shields.io/badge/license-MIT-green)](https://github.com/anishshrestha007/BoggleGame) [![license](https://img.shields.io/badge/build-passing-green)](https://github.com/anishshrestha007/BoggleGame)

# A Boggle Game

This is a [Ruby on Rails](https://rubyonrails.org/) and [React.js](https://reactjs.org/) based implementation of the **Boggle** game.

## Built with

- Ruby 2.6.5

- Rails 6.0.2

- Node : v12.13.1

- npm : 6.6.0 or Yarn

- React JS 16.13.0

## Quick Start

You need to have bundler installed in your system.

**Step 1:** You can install it by typing:

```bash
$ gem install bundler
```

**Step 2:** Install all the related package.

Open of a terminal window in the root of the project **/boggle-rails-react** and type :

```bash
$ bundle install
```

**Step 3:** Install the necessary node packages:

```bash
$ yarn install or
$ npm install
```

**Step 4:** Run the server:

```bash
$ rails server
```

**Note:** _All database dependencies, Active records dependencies have been intentionally removed as we wont be needing them for this demo project._

## How it works ?

[**Boggle**](https://en.wikipedia.org/wiki/Boggle) is a [word game](https://en.wikipedia.org/wiki/Word_game) invented by Allan Turoff and originally distributed by [Parker Brothers](https://en.wikipedia.org/wiki/Parker_Brothers). The game is played using a grid of letters, in which the players attempt to find words in sequences of adjacent letters.

Basically, The player searches for words that can be constructed from the letters of sequentially adjacent cubes, where "adjacent" cubes are those horizontally, vertically and diagonally neighboring. Words must be at least three letters long, may include singular and plural (or other derived forms) separately. The application records all the words that is submitted by the players. After **three minutes** have elapsed, the application stops the player from the game play and the game enters the scoring phase.

## Running the tests

#### Testing the Rails APIs

You can test the Rails API by executing the following code in a terminal window, at the root of the (**/boggle-rails-react**) project:

```bash
$ bundle exec rspec
```

#### Testing JavaScript

```bash
$ npm test
```

## Screenshots

##### Dashboard Preview

<img src="resources\DashBoard.png" alt="Home Page" style="zoom: 80%;" />

##### Boggle Game Preview

![Boggle Game Preview](resources/BoggleGame.png)

##### Boggle Game Review

![Boggle Game Review](resources/GameReview.png)

## License

MIT © [Anish Shrestha](https://github.com/anishshrestha007)

## Author

- **Anish Shrestha** - [@Anish](https://github.com/anishshrestha007)

## Credits and References

- [Wikipedia Definition](https://en.wikipedia.org/wiki/Boggle)
- [Code Sandbox](https://codesandbox.io/s/k018kn7nwo?from-embed)
- [React-Boggle-Game](https://github.com/isuruAb/react-boggle-game)
- [CodePen - Sample](https://codepen.io/jbalesteri/pen/yYeozq)
- [Code - Sample](https://www.codementor.io/@oyebanjijacob/creating-a-boggle-game-using-react-part-1-bd37sulcs)
