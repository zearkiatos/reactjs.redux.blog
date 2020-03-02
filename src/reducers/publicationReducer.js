import { GET_PUBLICATION_BY_USER, LOADING, ERROR } from "../types/publicationType";
const BEGIN_PUBLICATION_STATE = {
  publications: [],
  loading: false,
  error: ""
};

export default (state = BEGIN_PUBLICATION_STATE, action) => {
  switch (action.type) {
    case  GET_PUBLICATION_BY_USER:
      return {
        ...state,
        publications: action.payload,
        loading: false,
        error: ""
      };
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
