import { GET_USERS, LOADING, ERROR } from "../types/userType";
const BEGIN_USER_STATE = {
  publications: [],
  loading: false,
  error: ""
};

export default (state = BEGIN_USER_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
