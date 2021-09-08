import { RECIEVE_USERS } from '../actions/users'

export default (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_USERS :
            return {
                ...state,
                ...action.payload.users
            }
        default:
            return state
    }
}