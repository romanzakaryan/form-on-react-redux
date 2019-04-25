import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Welcome } from "./../components/Welcome";

class WelcomeContainer extends React.Component {
  render() {
    return <Welcome name={this.props.name} surname={this.props.surname} />;
  }
}

const mapStateToProps = state => {
  return {
    name: state.login.name,
    surname: state.login.surname
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(WelcomeContainer)
);
