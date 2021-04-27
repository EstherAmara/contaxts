import actionTypes from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosIntercepters"

export const clearAuthState = () => dispatch => {
    dispatch({
        type: actionTypes.CLEAR_AUTH_STATE,
    })
}
export default ({email, password, username, firstname:first_name, lastname:last_name}) => dispatch => {
    dispatch({
        type: actionTypes.REGISTER_LOADING
    });
    axiosInstance.post('api/auth/register', {
        email,password,username,first_name,last_name
    }).then(res=> {
        dispatch({
            type: actionTypes.REGISTER_SUCCESS,
            payload: res.data,
        })
    }).catch(err => {
        console.log('error in register action', err)
        dispatch({
            type: actionTypes.REGISTER_FAIL,
            payload: err.response ? err.response.data : {err: 'Something went wrong'}
        })
    })
}