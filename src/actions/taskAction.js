import axios from "axios";
import { GET_TASKS, LOADING, ERROR } from "../types/taskType";
export const getTasks = () => async dispatch => {
  dispatch({
    type: LOADING
  })
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({
      type: GET_TASKS,
      payload: response.data
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    dispatch({
      type: ERROR,
      payload: 'Information of task not avalaible.'
    });
  }
};
