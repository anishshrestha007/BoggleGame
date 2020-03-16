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
      size: 4
    };
  }
  handleChange = (e, data) => {
    this.setState({ userName: data.value });
  };
  handleDropDownChange = (e, data) => {
    this.setState({ size: data.value });
  };
  handleSubmit = (event, data) => {
    const { userName, size } = this.state;
    const history = this.props.history;
    if (userName) {
      var gameObj = {
        userName,
        size
      };
    }
  };
  render() {
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
              iconPosition="left"
              placeholder="Enter you name here"
              onChange={this.handleChange}
              name="userName"
            />
            <Divider />
            <div className="rowC">
              <Dropdown
                placeholder="Select Board Size"
                fluid
                selection
                options={gameOptions}
                onChange={this.handleDropDownChange}
              />
              <Label>Size</Label>
            </div>
            <div className="center-wrapper">
              <Button
                onClick={this.handleSubmit}
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

export default DashBoard;
