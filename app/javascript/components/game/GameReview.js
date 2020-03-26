import React from "react";
import ScoreBoard from "./ScoreBoard";
import { Image } from "semantic-ui-react";
import ProfilePic from "../../../assets/images/ProfilePic.jpg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
class GameReview extends React.Component {
  render() {
    const {gameInfo} = this.props;
    return (
      <React.Fragment>
          <Image floated="left" size="mini" src={ProfilePic} />{" "}
                  {gameInfo.userName}
        <ScoreBoard isGameComplete={true} />
      
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  gameInfo: state => state.game.gameInfo
});
const mapDispatchToProps = {};
export default connect(structuredSelector, mapDispatchToProps)(GameReview);
