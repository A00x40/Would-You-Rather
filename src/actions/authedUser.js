/** Action Types */
export const SET_AUTHED_USER = "SET_AUTHED_USER"

/** Action Creators */
export const setAuthedUser = (id) => ({
    type: SET_AUTHED_USER,
    payload: {
        id
    }
})