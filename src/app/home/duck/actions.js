
// actions.js
import types from './types.js';

const incrementCount = (value) => {
    type: types.INCREMENT_COUNT,
    value: value    
};

const decrementCount = (value) => {
    type: types.DECREMENT_COUNT,
    value: value
};

const requestArtworkJson = (artwork) => {
    type: types.REQUEST_ARTWORK_JSON,
    artwork: artwork
};
const receiveArtworkJson = (json) => {
    type: types.RECEIVE_ARTWORK_JSON,
    artworkData: json
}

export default {
    incrementCount,
    decrementCount,
    requestArtworkJson,
    receiveArtworkJson
}

//import { createActions } from 'reduxsauce';

// const { Creators, Types } = createActions({
//   increment: ['value'],
//   decrement: ['value'],
//   requestSubredditJson: ['subreddit'],
//   receiveSubredditJson: ['subredditData']
// });

// export { Creators, Types };