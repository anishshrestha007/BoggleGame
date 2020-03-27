import React from "react";
import ScoreBoard from "./ScoreBoard";
import { Image, Button } from "semantic-ui-react";
import ProfilePic from "../../../assets/images/ProfilePic.jpg";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "../css/BoggleGame.css";
class GameReview extends React.Component {
  handleRestartGame = () => {
    var history = this.props.history;
    history.push("/BoggleGame");
  };
  render() {
    const { gameInfo } = this.props;
    return (
      <React.Fragment>
        <div className="row-center review">
          <ScoreBoard isGameComplete={true} />
          <Button
          onClick={this.handleRestartGame}
          color="green"
          icon="game"
          content="Back to Game"
        />
        </div>
       
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  gameInfo: state => state.game.gameInfo
});
const mapDispatchToProps = {};
export default connect(structuredSelector, mapDispatchToProps)(GameReview);
