import { connect } from "react-redux";

import CentralDisplayComponent from "./CentralDisaplyComponent";

import { homeOperations } from "./duck";

const mapStateToProps = state => {
  const { artworkData, showAudenSpinner } = state.home;
  return {
    showAudenSpinner,
    artworkData
  };
};

const mapDispatchToProps = dispatch => {
  const fetchArtWorkJson = artwork => {
    dispatch(homeOperations.fetchArtWorkJson(artwork));
  };
  return { fetchArtWorkJson };
};

const CentralDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CentralDisplayComponent);

export default CentralDisplayContainer;
