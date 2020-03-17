import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { startGame } from "../../store/actions/gameAction";
class BoggleGame extends React.Component {
  render() {
    const { gameInfo } = this.props;

    return <React.Fragment> Welcome {gameInfo.userName}</React.Fragment>;
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
