import axios from "axios";
import { GET_TASKS, LOADING, ERROR, CHANGE_USER_ID, CHANGE_TITLE, ADDED_TASK } from "../types/taskType";
export const getTasks = () => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const tasks = {};
    response.data.map(
      task =>
        (tasks[task.userId] = {
          ...tasks[task.userId],
          [task.id]: {
            ...task
          }
        })
    );
    dispatch({
      type: GET_TASKS,
      payload: tasks
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    dispatch({
      type: ERROR,
      payload: "Information of task not avalaible."
    });
  }
};

export const changeUserId = userId => dispatch => {
  dispatch({
    type: CHANGE_USER_ID,
    payload: userId
  });
};

export const changeTitle = title => dispatch => {
  dispatch({
    type: CHANGE_TITLE,
    payload: title
  });
};

export const add = newTask => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTask);
    if(response.data) {
      dispatch({
        type:ADDED_TASK
      });
      console.log(response.data);
    }
  }
  catch(error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: 'Trying again late'
    });
  }
};
