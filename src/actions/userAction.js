import axios from "axios";
export const getUsers = () => async dispatch => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  dispatch({
    type: "getUsers",
    payload: response.data
  });
};
