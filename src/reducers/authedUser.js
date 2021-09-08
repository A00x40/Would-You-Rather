import { userConstants } from '../constants' 

const authedUser = (state = null, action) => {
    switch (action.type) {
        case userConstants.SET_AUTHED_USER :
            return action.payload.id
        default:
            return state
    }
}

export default authedUser