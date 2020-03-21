import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { startGame } from "../../store/actions/gameAction";
import "../css/BoggleGame.css";
import { Grid, Card, Button, Label } from "semantic-ui-react";
const letterArr = [
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
  constructor(props) {
    super(props);
    this.state = {
      selectedCells: [],
      selectedLetters: "",
      prevCell: null,
      letters: _.shuffle(letterArr)
    };
  }
  handleCellClick = (selectedLetter, selected, rowId, colId) => {
    console.log(rowId + " * " + colId);
    const { selectedCells, selectedLetters, prevCell } = this.state;
    const currentCell = {
      rowId,
      colId
    };
    debugger;
    if (!selected && this.isCellAdjacent(prevCell, currentCell))
      this.setState(
        prevState => ({
          selectedCells: [
            ...prevState.selectedCells,
            {
              selectedLetter,
              cellPosition: {
                rowId,
                colId
              }
            }
          ],
          selectedLetters: prevState.selectedLetters.concat(selectedLetter),
          prevCell: currentCell
        }),
        () => {
          console.log(selectedLetters);
        }
      );
    else {
      if (selectedLetters[selectedLetters.length - 1] === selectedLetter) {
        this.setState(
          prevState => ({
            selectedCells: prevState.selectedCells.slice(0, -1),
            selectedLetters: prevState.selectedLetters.slice(0, -1),
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
      letters: _.shuffle(prevState.letters),
      selectedCells: [],
      selectedLetters: "",
      prevCell: null
    }));
  };
  handleUndoDeck = () => {
    const { selectedCells, selectedLetters } = this.state;
    this.setState(
      prevState => ({
        selectedCells: prevState.selectedCells.slice(0, -1),
        selectedLetters: prevState.selectedLetters.slice(0, -1),
        prevCell:
          selectedCells.length <= 1
            ? null
            : selectedCells[selectedCells.length - 2].cellPosition
      }),
      () => {
        console.log(selectedLetters);
      }
    );
  };
  render() {
    const { gameInfo } = this.props;
    const { selectedCells, selectedLetters, letters } = this.state;

    const chunckedLetters = _.chunk(letters, 4);
    debugger;
    return (
      <React.Fragment>
        {" "}
        <Card centered color="orange" raised={true}>
          <Card.Content>
            <Card.Header textAlign="center" color="orange">
              Welcome {gameInfo.userName}
              <Button onClick={this.handleShuffleDeck} basic icon="recycle" />
              <Button onClick={this.handleUndoDeck} basic icon="undo" />
            </Card.Header>
            <Grid columns={4} celled={true} textAlign="center">
              {chunckedLetters.map((letters, index) => (
                <Grid.Row color="teal" key={index}>
                  {letters.map((letter, i) => (
                    <Grid.Column
                      className={
                        selectedLetters.includes(letter) ? "selectedCell" : ""
                      }
                      key={letter}
                      floated="right"
                      onClick={() =>
                        this.handleCellClick(
                          letter,
                          selectedLetters.includes(letter),
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
