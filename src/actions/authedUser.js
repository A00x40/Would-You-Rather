import { userConstants } from '../constants'

/** Action Creators */
export const setAuthedUser = (id) => ({
    type: userConstants.SET_AUTHED_USER,
    payload: {
        id
    }
})