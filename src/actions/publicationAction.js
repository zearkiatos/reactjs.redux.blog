import axios from "axios";

export const getPublication = () => async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
        type:'GET_PUBLICATIONS',
        payload: response.data
    })
}