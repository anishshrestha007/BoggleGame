import React from "react"
import PropTypes from "prop-types"
class BoggleGame extends React.Component {
  render () {
    return (
      <React.Fragment>
        Boggle Param: {this.props.boggleParam}
      </React.Fragment>
    );
  }
}

BoggleGame.propTypes = {
  boggleParam: PropTypes.string
};
export default BoggleGame
