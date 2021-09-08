import { userConstants } from '../constants' 

const authedUser = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_LOGIN_SUCCESS :
            return {
                id: action.payload.id,
                loggedIn: true
            }
        case userConstants.USER_LOGOUT :
            return {}
        default:
            return state
    }
}

export default authedUser