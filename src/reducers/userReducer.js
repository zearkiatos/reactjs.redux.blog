const BEGIN_USERS_STATE = {
  users: []
};

export default (state = BEGIN_USERS_STATE, action) => {
  switch (action.type) {
    case "getUsers":
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};
