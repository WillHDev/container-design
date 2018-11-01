import React from "react";
import { connect } from "react-redux";
import HomeComponent from "./HomeComponent";

import { homeOperations } from "./duck";

const mapStateToProps = state => {
  const { currentCount } = state.home;
  return { currentCount };
};
//these are callback methods
const mapDispatchToProps = dispatch => {
  const onIncrementClick = () => dispatch(homeOperations.increment(1));
  const onDecrementClick = () => dispatch(homeOperations.decrement(1));
};

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

export default HomeContainer;

//wrapper provides relevant data and callbacks for its proper...
//vs. child/presentational: doesnt care what gets passed down
