import React from "react";
import PropTypes from "prop-types";
import { Input, Header, Card, Icon } from "semantic-ui-react";
class DashBoard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card centered color="orange" raised={true}>
          <Card.Content>
            <Card.Header color="orange"> Boggle Game </Card.Header>
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
              label="UserName"
              placeholder="Enter you name here"
            />
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  }
}

export default DashBoard;
