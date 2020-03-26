import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Card, Button, Table } from "semantic-ui-react";
import Timer from "../generics/Timer";

class ScoreBoard extends React.Component {
  render() {
    const { gameInfo, isGameComplete } = this.props;
    return (
      <Card centered color="orange" raised={true}>
        <Card.Content>
          <Card.Header textAlign="center" color="orange">
            <div>
              {isGameComplete ? (
                "Game Completed"
              ) : (
                <Button
                  content="TIme"
                  icon="time"
                  label={{
                    as: "a",
                    basic: true,
                    content: (
                      <Timer
                        timeValue={gameInfo.gameTime}
                        timerEnded={this.props.gameEnded}
                      />
                    )
                  }}
                  labelPosition="right"
                />
              )}
            </div>
          </Card.Header>
          <Table color={"orange"} key={"orange"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Word</Table.HeaderCell>
                <Table.HeaderCell>Score</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {gameInfo &&
                gameInfo.words.map((gi, index) => {
                  return (
                    gi.score > 0 && (
                      <Table.Row>
                        <Table.Cell>{_.capitalize(gi.word)}</Table.Cell>
                        <Table.Cell>{gi.score}</Table.Cell>
                      </Table.Row>
                    )
                  );
                })}
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell>
                  <b> Total Score : </b>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <b> {gameInfo.totalscore} pts </b>{" "}
                </Table.HeaderCell>
              </Table.Row>
              {gameInfo.totalAttepts > 0 && gameInfo.isComplete && (
                <React.Fragment>
                  <Table.Row>
                    <Table.HeaderCell>
                      <b>Total Attempts : </b>{" "}
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      <b> {gameInfo.totalscore} </b>
                    </Table.HeaderCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>
                      <b>Correct Attempts :</b>{" "}
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      {" "}
                      <b> {gameInfo.correctAttempts} </b>
                    </Table.HeaderCell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>
                      <b>Incorrect Attempts :</b>{" "}
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      {" "}
                      <b> {gameInfo.inCorrectAttempts} </b>
                    </Table.HeaderCell>
                  </Table.Row>
                </React.Fragment>
              )}
            </Table.Footer>
          </Table>
        </Card.Content>
      </Card>
    );
  }
}

const structuredSelector = createStructuredSelector({
  gameInfo: state => state.game.gameInfo
});
const mapDispatchToProps = {};
export default connect(structuredSelector, mapDispatchToProps)(ScoreBoard);
