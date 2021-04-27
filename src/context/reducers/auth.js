import actionTypes from "../../constants/actionTypes";

const auth = (state, { type, payload }) => {
    switch (type) {
        case actionTypes.REGISTER_LOADING:
            console.log('state', state);
            return {
                ...state,
                loading: true,
            };

        case actionTypes.REGISTER_SUCCESS: 
            return {
                ...state,
                loading: false,
                data: payload
            }

        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            }

        case actionTypes.CLEAR_AUTH_STATE:
            return {
                ...state,
                loading: false,
                data: null,
                error: null
            }
    
        default:
            return state;
    }
};

export default auth;