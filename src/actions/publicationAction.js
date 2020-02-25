import axios from "axios";
import { GET_PUBLICATIONS, GET_PUBLICATION_BY_USER, LOADING, ERROR } from "../types/publicationType";
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

export const getPublicationByUser = (key) => async (dispatch, getState) => {
    const { users } = getState().userReducer;
    const user_id = users[key].id;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
    dispatch({
        type: GET_PUBLICATION_BY_USER,
        payload: response.data

    });
}
