import axios from "axios";
import {
  GET_TASKS,
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE,
  SAVE_TASK,
  UPDATE_TASK,
  CLEAR_TASK
} from "../types/taskType";
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

export const add = newTask => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    await axios.post("https://jsonplaceholder.typicode.com/todos", newTask);
    dispatch({
      type: SAVE_TASK
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: "Service is not allow in this moment."
    });
  }
};

export const edit = editedTask => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${editedTask.userId}`,
      editedTask
    );
    dispatch({
      type: SAVE_TASK
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ERROR,
      payload: "Service is not allow in this moment."
    });
  }
};

export const changeCheck = (userId, taskId) => (dispatch, getState) => {
  const { tasks } = getState().taskReducer;
  const selected = tasks[userId][taskId];
  const updated = {
    ...tasks
  };
  updated[userId] = {
    ...tasks[userId]
  };
  updated[userId][taskId] = {
    ...tasks[userId][taskId],
    completed: !selected.completed
  };
  dispatch({
    type: UPDATE_TASK,
    payload: updated
  });
};

export const deleting = taskId => async dispatch => {
  dispatch({
    type: LOADING
  });
  try {
    await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${taskId}`
    );
    dispatch({
      type: GET_TASKS,
      payload: {}
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type:ERROR,
      payload:"Service is not allow in this moment."
    })
  }
};

export const clearForma = () => (dispatch) => {
  dispatch({
    type: CLEAR_TASK
  })
}
