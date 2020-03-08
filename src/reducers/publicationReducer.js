import { UPDATING, LOADING, ERROR, COMMENT_LOADING, COMMENT_ERROR } from "../types/publicationType";
const BEGIN_PUBLICATION_STATE = {
  publications: [],
  loading: false,
  error: "",
  commentLoading: false,
  commentError: false
};

export default (state = BEGIN_PUBLICATION_STATE, action) => {
  switch (action.type) {
    case UPDATING:
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
    case COMMENT_LOADING:
      return { ...state, commetLoading: true };
    case COMMENT_ERROR:
      return { ...state, commentError: action.payload, commentLoading: false };
    default:
      return state;
  }
};
