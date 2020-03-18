import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { startGame } from "../../store/actions/gameAction";
import { Grid, Card, Button, Label } from "semantic-ui-react";
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p"
];
class BoggleGame extends React.Component {
  render() {
    const { gameInfo } = this.props;
    const chunckedLetters = _.chunk(letters, 4);
    return (
      <React.Fragment>
        {" "}
        <Card centered color="orange" raised={true}>
          <Card.Content>
            <Card.Header textAlign="center" color="orange">
              Welcome {gameInfo.userName}
            </Card.Header>
            <Grid columns={4} celled={true} textAlign="center">
              {chunckedLetters.map(letters => (
                <Grid.Row color="teal">
                  {letters.map(letter => (
                    <Grid.Column
                      key={letter}
                      floated="right"
                      onClick={() => console.log({ letter })}
                    >
                      {_.capitalize(letter)}
                    </Grid.Column>
                  ))}
                </Grid.Row>
              ))}
            </Grid>
          </Card.Content>
          <Card.Content extra>
            <div className="center-wrapper">
              <Button
                onClick={this.handleStartGame}
                basic
                color="green"
                icon="play"
                content="Submit"
              />
            </div>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

BoggleGame.propTypes = {
  boggleParam: PropTypes.string
};
const structuredSelector = createStructuredSelector({
  gameInfo: state => state.game.gameInfo
});
const mapDispatchToProps = { startGame };
export default connect(structuredSelector, mapDispatchToProps)(BoggleGame);
