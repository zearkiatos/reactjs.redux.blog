import { GET_TASKS, LOADING, ERROR } from "../types/taskType";
const BEGIN_TASK_STATE = {
  tasks: [],
  loading: false,
  error: "",
  userId:'',
  title:''
};

export default (state = BEGIN_TASK_STATE, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: ''
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    case 'change_user_id':
      return {...state, userId: action.payload}
    case 'change_title':
        return {...state, userId: action.payload}
    default:
      return state;
  }
};
