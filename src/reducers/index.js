import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import users from '../reducers/users'
import questions from '../reducers/questions'
import authedUser from '../reducers/authedUser'

export default combineReducers({
    users,
    questions,
    authedUser,
    loadingBar: loadingBarReducer
})