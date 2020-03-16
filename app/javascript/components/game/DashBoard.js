import React from "react";
import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";
class DashBoard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Input label="http://" placeholder="mysite.com" />
      </React.Fragment>
    );
  }
}

export default DashBoard;
