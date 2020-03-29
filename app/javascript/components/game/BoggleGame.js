import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  getGameData,
  checkWord,
  completeGame,
  resetGameData
} from "../../store/actions/gameAction";
import "../css/BoggleGame.css";
import { Grid, Card, Button, Label, Image } from "semantic-ui-react";

import ScoreBoard from "./ScoreBoard";
import { showToast } from "../generics/Toast";
import { isSubmitValid } from "../../utils/gameUtil";
import Timer from "../generics/Timer";

class BoggleGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCells: [],
      selectedLetters: "",
      prevCell: null,
      boggleData: null,
      word: "",
      resetGame: true
    };
  }
  componentDidMount() {
    this.props.getGameData &&
      this.props.getGameData(this.props.gameInfo, resp => {
        this.setState({ boggleData: resp.game_data.split("") });
      });
  }
  componentWillUnmount() {
    this.props.resetGameData && this.props.resetGameData(this.state.resetGame);
  }
  handleCellClick = (selectedLetter, selected, rowId, colId) => {
    console.log(rowId + " * " + colId);
    const { selectedCells, selectedLetters, prevCell, word } = this.state;
    const currentCell = {
      rowId,
      colId
    };

    if (!selected && this.isCellAdjacent(prevCell, currentCell))
      this.setState(
        prevState => ({
          selectedCells: [
            ...prevState.selectedCells,
            {
              selectedLetter: selectedLetter + rowId + colId,
              cellPosition: {
                rowId,
                colId
              }
            }
          ],
          selectedLetters: prevState.selectedLetters.concat(
            selectedLetter + rowId + colId
          ),
          word: prevState.word.concat(selectedLetter),
          prevCell: currentCell
        }),
        () => {
          console.log(selectedLetters);
        }
      );
    else {
      if (
        selectedLetters.substr(selectedLetters.length - 3) ===
        selectedLetter + rowId + colId
      ) {
        this.setState(
          prevState => ({
            selectedCells: prevState.selectedCells.slice(0, -1),
            selectedLetters: prevState.selectedLetters.replace(
              selectedLetter + rowId + colId,
              ""
            ),
            word: prevState.word.slice(0, -1),
            prevCell:
              selectedCells.length <= 1
                ? null
                : selectedCells[selectedCells.length - 2].cellPosition
          }),
          () => {
            console.log(selectedLetters);
          }
        );
      }
    }
  };
  isCellAdjacent(prevCell, currentCell) {
    if (!prevCell) return true;
    const colDiff = Math.abs(prevCell.colId - currentCell.colId);
    const rowDiff = Math.abs(prevCell.rowId - currentCell.rowId);
    if (colDiff <= 1 && rowDiff <= 1) {
      return true;
    } else {
      return false;
    }
  }
  handleShuffleDeck = () => {
    this.setState(prevState => ({
      boggleData: _.shuffle(prevState.boggleData),
      selectedCells: [],
      selectedLetters: "",
      prevCell: null,
      word: ""
    }));
  };
  handleUndoDeck = () => {
    const { selectedCells, selectedLetters, prevCell, word } = this.state;

    if (prevCell)
      this.setState(
        prevState => ({
          selectedCells: prevState.selectedCells.slice(0, -1),
          selectedLetters: prevState.selectedLetters.replace(
            word[word.length - 1] + prevCell.rowId + prevCell.colId,
            ""
          ),
          prevCell:
            selectedCells.length <= 1
              ? null
              : selectedCells[selectedCells.length - 2].cellPosition,
          word: prevState.word.slice(0, -1)
        }),
        () => {
          console.log(selectedLetters);
        }
      );
  };
  gameEnded = () => {
    this.setState({ resetGame: false }, () => {
      this.completeGame(true);
    });
  };
  handleRestartGame = () => {
    this.completeGame(false);
  };
  completeGame(param) {
    this.props.completeGame &&
      this.props.completeGame(param, () => {
        var history = this.props.history;
        history.push("/GameReview");
      });
  }
  handleSubmitGame = () => {
    const { gameInfo } = this.props;
    const { word } = this.state;
    if (isSubmitValid(word, gameInfo)) {
      this.props.checkWord &&
        this.props.checkWord(this.props.gameInfo.version, word, () => {
          this.setState(prevState => ({
            selectedCells: [],
            selectedLetters: "",
            prevCell: null,
            word: ""
          }));
        });
    }
  };
  handleResetClick = () => {
    this.setState(prevState => ({
      selectedCells: [],
      selectedLetters: "",
      prevCell: null,
      word: ""
    }));
  };
  render() {
    const { gameInfo } = this.props;
    const { selectedCells, selectedLetters, boggleData, word } = this.state;

    const chunckedLetters = boggleData && _.chunk(boggleData, gameInfo.size);

    return (
      <React.Fragment>
        {boggleData && (
          <div class="row-center">
            <Card color="orange" raised={true}>
              <Card.Content>
                <Card.Header textAlign="center" color="orange">
                  <div className="card-header-custom">
                    {!gameInfo.isComplete && (
                      <Button
                        icon="time"
                        label={{
                          as: "a",
                          basic: true,
                          content: (
                            <Timer
                              timeValue={gameInfo.gameTime}
                              timerEnded={this.gameEnded}
                            />
                          )
                        }}
                        labelPosition="right"
                      />
                    )}
                    <Button
                      onClick={this.handleShuffleDeck}
                      basic
                      icon="recycle"
                    />
                    <Button onClick={this.handleUndoDeck} basic icon="undo" />
                    <Button onClick={this.handleResetClick} basic>
                      {" "}
                      Reset{" "}
                    </Button>
                  </div>
                </Card.Header>
                <Grid columns={gameInfo.size} celled={true} textAlign="center">
                  {chunckedLetters.map((letters, index) => (
                    <Grid.Row color="teal" key={index}>
                      {letters.map((letter, i) => (
                        <Grid.Column
                          className={
                            selectedLetters.includes(letter + index + i)
                              ? "selectedCell"
                              : ""
                          }
                          key={i}
                          floated="right"
                          onClick={() =>
                            this.handleCellClick(
                              letter,
                              selectedLetters.includes(letter + index + i),
                              index,
                              i
                            )
                          }
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
                  {!gameInfo.isComplete ? (
                    <React.Fragment>
                      {" "}
                      <p>Word : {_.capitalize(word)} </p>
                      <Button
                        onClick={this.handleSubmitGame}
                        basic
                        color="green"
                        icon="play"
                        content="Check"
                      />{" "}
                    </React.Fragment>
                  ) : (
                    <Button
                      onClick={this.handleRestartGame}
                      basic
                      color="green"
                      icon="play"
                      content="Restart Game"
                    />
                  )}
                </div>
              </Card.Content>
            </Card>
            <ScoreBoard showResult={false} gameEnded={this.gameEnded} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  gameInfo: state => state.game.gameInfo
});
const mapDispatchToProps = {
  getGameData,
  checkWord,
  completeGame,
  resetGameData
};
export default connect(structuredSelector, mapDispatchToProps)(BoggleGame);
