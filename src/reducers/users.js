import { userConstants } from '../constants'

const users = (state = {}, action) => {
    switch (action.type) {
        case userConstants.RECIEVE_USERS :
            return {
                ...state,
                ...action.payload.users
            }
        default:
            return state
    }
}

export default users