import * as types from './userTypes';
import axios from 'axios';

const API_URL = "http://localhost:3000"

// export const authRequest = () => {
//     return {
//         type: types.AUTHENTICATION_REQUEST
//     }
// }

export const authSuccess = (user) => {
    return {
        type: types.AUTHENTICATION_SUCCESS,
        logged_in: user.logged_in
    }
}

const authFailure = (errors) => {
    return {
        type: types.AUTHENTICATION_FAILURE,
        errors: errors
    }
}

const authSessionStatus = (user) => {
    return {
        type: types.AUTHENTICATION_SESSION_STATUS,
        user: user.user,
        logged_in: user.logged_in
    }
}

export const signup = (user) => {
    return dispatch => {
        return axios.post(`${API_URL}/users`, { user }, { withCredentials: true })
            .then(res => res.json)
            .then(( data ) => {
                const { email, password } = data.data.attributes
                return dispatch(
                    authenticate({
                        email,
                        password
                    })
                );
            })
            .catch((errors) => {
                dispatch(authFailure(errors));
            });
    };
}

export const authenticate = (credentials) => {
    return dispatch => {
        return axios.post(`${API_URL}/login`, { credentials }, { withCredentials: true })
            .then(({data}) => {
                if(data.user){
                    return dispatch(authSuccess(data));
                } else{
                   return dispatch(authFailure(data.errors))
                }  
            })
            .catch((data) => {
                dispatch(authFailure(data))
            })
    }
}

export const sessionStatus = () => {
    return dispatch => {
        return axios.get(`${API_URL}/logged_in`, { withCredentials: true })
            .then(({ data }) => {
                return dispatch(authSessionStatus(data))
            }) 
            .catch((errors) => {
                dispatch(authFailure(errors))
            })
    }
}

export const logout = () => {
    return dispatch => {
        return axios.delete(`${API_URL}/logout`)
        .then((res) => res.json)
        .then(dispatch({
            type: types.LOGOUT
        }))

    }
}
