import { showLoading, hideLoading } from 'react-redux-loading'
import { userConstants } from '../constants'
import { _getUsers, _getQuestions } from '../utils/_DATA'
import { recieveUsers } from '../actions/users'
import { recieveQuestions }   from '../actions/questions'

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

export const handleLogin = (id, location) => {
    return async (dispatch) => {
        dispatch(showLoading())
        const users = await _getUsers()
        const user = users[id]

        try {
            // Will give error if id doesn't exist
            if(user.id) {

                // Check to not overwrite state with initial database
                if(location.state === undefined) {
                    const questions = await _getQuestions()
                    dispatch(recieveUsers(users))
                    dispatch(recieveQuestions(questions))
                }
                
                dispatch(setAuthedUser(user.id))
            }
        } catch(error) {
            alert(error.toString())
        }
            
        dispatch(hideLoading()) 
    }
}