import React from "react";
import ScoreBoard from "./ScoreBoard";
import {  Button } from "semantic-ui-react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "../css/BoggleGame.css";
import { reviewMsg } from "../../utils/gameUtil";
import TransitionComponent from "../generics/TransitionComponent.js";
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
          <TransitionComponent
            animation="jiggle"
            duration={500}
            visible={true}
            childComponent = {reviewMsg(gameInfo.totalscore)}
          />

          <ScoreBoard showResult={true} />
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
