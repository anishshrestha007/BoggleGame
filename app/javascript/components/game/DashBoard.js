import React from "react";
import PropTypes from "prop-types";
import {
  Input,
  Card,
  Icon,
  Dropdown,
  Divider,
  Label,
  Button
} from "semantic-ui-react";
import "../css/DashBoard.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { startGame } from "../../store/actions/gameAction";
import { toast } from "react-semantic-toasts";
import { showToast } from "../generics/Toast";

const gameOptions = [
  { key: "4", value: 4, text: "4 * 4" },
  { key: "5", value: 5, text: "5 * 5" },
  { key: "6", value: 6, text: "6 * 6" }
];
class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      size: 4,
      error: false
    };
  }
  handleChange = (e, data) => {
    this.setState({ userName: data.value });
  };
  handleDropDownChange = (e, data) => {
    this.setState({ size: data.value });
  };
  handleStartGame = (event, data) => {
    const { userName, size, error } = this.state;

    var history = this.props.history;

    if (userName) {
      var gameInfo = {
        userName,
        size
      };

      this.props.startGame &&
        this.props.startGame(gameInfo, () => {
          history.push("/BoggleGame");
        });
    } else {
      showToast("warning", "Please enter username before playing game!")
    }
    this.setState({ error: userName !== "" ? false : true });
  };
  render() {
    const { error } = this.state;
    return (
      <div className="dashboard-main">
        <Card centered color="orange" raised={true}>
          <Card.Content>
            <Card.Header textAlign="center" color="orange">
              Boggle Game
            </Card.Header>
            <Card.Description>
              Boggle is a word game invented by Allan Turoff and originally
              distributed by Parker Brothers.The game is played using a plastic
              grid of lettered dice, in which players attempt to find words in
              sequences of adjacent letters.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Input
              icon="user"
              error={error}
              iconPosition="left"
              placeholder="Enter you name here"
              onChange={this.handleChange}
              name="userName"
            />
            <Divider />
            <div className="rowC">
              <Dropdown
                placeholder="4 * 4"
                fluid
                selection
                options={gameOptions}
                onChange={this.handleDropDownChange}
              />
              <Label>Size</Label>
            </div>
            <div className="center-wrapper">
              <Button
                onClick={this.handleStartGame}
                basic
                color="green"
                icon="play"
                content="Play"
              />
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const structuredSelector = createStructuredSelector({
  gameInfo: state => state.game.gameInfo
});
const mapDispatchToProps = { startGame };
export default connect(structuredSelector, mapDispatchToProps)(DashBoard);
