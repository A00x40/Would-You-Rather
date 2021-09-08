import { userConstants } from '../constants'

/** Action Creators */
export const recieveUsers = (users) => ({
    type: userConstants.RECIEVE_USERS,
    payload: {
        users
    }
})