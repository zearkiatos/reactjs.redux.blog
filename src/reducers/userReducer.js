import { GET_USERS } from "../types/userType";
const BEGIN_USER_STATE = {
  users: []
};

export default (state = BEGIN_USER_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
