import { GET_USERS, LOADING, ERROR } from "../types/userType";
const BEGIN_USER_STATE = {
  users: [],
  loading: false,
  error: ""
};

export default (state = BEGIN_USER_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: ''
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
