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
    const tasks = {};
    response.data.map((task) => (
        tasks[task.userId] = {
            ...tasks[task.userId],
            [task.id]: {
                ...task
            }
        }
    ));
    dispatch({
      type: GET_TASKS,
      payload: tasks
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    dispatch({
      type: ERROR,
      payload: 'Information of task not avalaible.'
    });
  }
};

export const changeUserId = (userId) => (dispatch) => {
  dispatch({
    type: 'change_user_id',
    payload:userId
  })
}

export const changeTitle = (title) => (dispatch) => {
  dispatch({
    type: 'change_title',
    payload:title
  })
}