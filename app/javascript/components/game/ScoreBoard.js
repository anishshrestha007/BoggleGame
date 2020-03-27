import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Card, Table, Image } from "semantic-ui-react";
import ProfilePic from "../../../assets/images/ProfilePic.jpg";
import "../css/ScoreBoard.css";

class ScoreBoard extends React.Component {
  render() {
    const { gameInfo, showResult } = this.props;
    return (
      <Card color="orange" raised={true}>
        <Card.Content>
          <Card.Header textAlign="center" color="orange">
            <div className="user-info">
              <Image floated="left" size="mini" src={ProfilePic} />
              <span> {gameInfo.userName}</span>
            </div>
          </Card.Header>
          <div className="table-div-wrapper">
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
                        <Table.Row key= {index}>
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
                {gameInfo.totalAttepts > 0 && gameInfo.isComplete && showResult && (
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
          </div>
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
