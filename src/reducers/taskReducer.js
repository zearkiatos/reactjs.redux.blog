import {
  GET_TASKS,
  LOADING,
  ERROR,
  CHANGE_USER_ID,
  CHANGE_TITLE,
  SAVE_TASK,
  UPDATE_TASK
} from "../types/taskType";
const BEGIN_TASK_STATE = {
  tasks: [],
  loading: false,
  error: "",
  userId: "",
  title: "",
  return: false
};

export default (state = BEGIN_TASK_STATE, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: "",
        return: false
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    case CHANGE_USER_ID:
      return { ...state, userId: action.payload };
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    case SAVE_TASK:
      return {
        ...state,
        tasks: {},
        loading: false,
        error: "",
        return: true,
        userId: "",
        title: ""
      };
    case UPDATE_TASK:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};
