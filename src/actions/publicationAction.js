import axios from "axios";
import { GET_PUBLICATIONS, GET_PUBLICATION_BY_USER, LOADING, ERROR } from "../types/publicationType";
import * as userType from '../types/userType';
const { GET_USERS } = userType;
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
    dispatch({
      type:LOADING
    });
    const { users } = getState().userReducer;
    const { publications } = getState().publicationReducer;
    const user_id = users[key].id;
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

        const news = response.data.map((publication) => ({
          ...publication,
          comments: [],
          open: false,
        }));
        
        const updatedPublication = [
          ...publications,
          news
        ];
        dispatch({
          type: GET_PUBLICATION_BY_USER,
          payload: updatedPublication

      });
        const publicationKey = updatedPublication.length - 1;
        const updatedUser =    [ ...users ];
        updatedUser[key]={
          ...users[key],
          publicationKey
        }
        dispatch({
          type: GET_USERS,
          payload: updatedUser

      });
    }
    catch(error) {
      console.log(`Error: ${error.message}`);
      dispatch({
        type:ERROR,
        payload:"Publications not avalaibles."
      });
    }

}

export const openClose = (publicationKey, commentKey) => (dispatch) => {
  console.log(`${publicationKey} ${commentKey}`);
}
