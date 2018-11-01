import fetch from "cross-fetch";
import {
  incrementCount,
  decrementCount,
  requestArtworkJsonAction,
  receiveArtworkJsonAction
} from "./actions";
//import { API_BASE_URL } from "../config";
const API_BASE_URL = "https://localhost:8080";
const fetchArtworkJson = piece => {
  return dispatch => {
    dispatch(requestArtworkJsonAction(piece));
    return fetch(`${API_BASE_URL}/api/${piece}`) //.json
      .then(response => response.json())
      .then(json => {
        // const resonseData = json;
        // let data=[];
        // responseData.children.map(child => {})
        //    const {data} = json;
        //    return null;
        dispatch(receiveArtworkJsonAction(json));
      });
  };
};

export default {
  incrementCount,
  decrementCount,
  fetchArtworkJson
};
//artwork posts instead of json in export?
