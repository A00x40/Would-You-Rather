import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import users from '../reducers/users'
import questions from '../reducers/questions'
import authedUser from '../reducers/authedUser'

export default combineReducers({
    users,
    questions,
    authedUser,
    loadingBar: loadingBarReducer
})