/** Action Types */
export const RECIEVE_USERS = "RECIEVE_USERS"

/** Action Creators */
export const recieveUsers = (users) => ({
    type: RECIEVE_USERS,
    payload: {
        users
    }
})