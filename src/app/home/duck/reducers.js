// reducers.js
import types from "./types";

const INITIAL_STATE = {
  count: 0,
  subreddit: "",
  showSpinner: false,
  ArtworkData: []
};
const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNT: {
      const { value } = action;
      const { count } = state;
      return {
        ...state,
        count: count + value
      };
    }

    case types.DECREMENT_COUNT: {
      const { value } = action;
      const { count } = state;
      return {
        ...state,
        count: count - value
      };
    }

    case types.REQUEST_ARTWORK_JSON: {
      const { artwork } = action;
      return {
        ...state,
        artwork,
        artworkData: [],
        showSpinner: true
      };
    }

    case types.RECEIVE_ARTWORK_JSON: {
      const { artworkData } = action;
      return {
        ...state,
        artworkData,
        showSpinner: false
      };
    }

    default:
      return state;
  }
};

export default homeReducer;
