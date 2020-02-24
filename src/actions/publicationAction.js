import axios from "axios";
import { GET_PUBLICATIONS, LOADING, ERROR } from "../types/publicationType";
export const getPublications = () => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: GET_PUBLICATIONS,
      payload: response.data
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    dispatch({
      type: ERROR,
      payload: "Something was wrong, reject late"
    });
  }
};
