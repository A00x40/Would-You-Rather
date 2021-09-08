import { showLoading, hideLoading } from 'react-redux-loading'
import { userConstants } from '../constants'
import { _getUsers } from '../utils/_DATA'

/** Action Creators */
export const setAuthedUser = (id) => ({
    type: userConstants.USER_LOGIN_SUCCESS,
    payload: {
        id
    }
})

export const handleLogout = () => ({
    type: userConstants.USER_LOGOUT
})

export const handleLogin = (id) => {
    return async (dispatch) => {
        dispatch(showLoading())
        const users = await _getUsers()
        const user = users[id]

        try {
            dispatch(setAuthedUser(user.id))
        } catch(error) {
            alert(error.toString())
        }
            
        dispatch(hideLoading())
    }
}