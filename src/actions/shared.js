import { getInitialData } from '../utils/api'

import { recieveUsers } from '../actions/users'
import { recieveQuestions }   from '../actions/questions'
import { setAuthUser }    from '../actions/authUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTH_ID = "tylermcginnis"

export const handleInitialData = () => {
    return async (dispatch) => {
        dispatch(showLoading())
        const { users, questions } = await getInitialData()
        dispatch(recieveUsers(users))
        dispatch(recieveQuestions(questions))
        dispatch(hideLoading())
    }
}