import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getThings } from "../store/actions/gameAction";
class BoggleGame extends React.Component {
  componentDidMount() {}
  render() {
    debugger;
    const { things } = this.props;
    const thingsList =
      things &&
      things.map(things => {
        return (
          <li>
            {" "}
            {things.name} {things.guid}
          </li>
        );
      });
    return (
      <React.Fragment>
        Boggle Param: {this.props.boggleParam}
        <button className="getThingsBtn" onClick={() => this.props.getThings()}>
          getThings
        </button>
        <br />
        <ul>{thingsList}</ul>
      </React.Fragment>
    );
  }
}

BoggleGame.propTypes = {
  boggleParam: PropTypes.string
};
const structuredSelector = createStructuredSelector({
  things: state => state.game.things
});
const mapDispatchToProps = { getThings };
export default connect(structuredSelector, mapDispatchToProps)(BoggleGame);
