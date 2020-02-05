export const getUsers = () => (dispatch) => {
    dispatch({
        type:'getUsers',
        payload: [1,2,3]
    })
}