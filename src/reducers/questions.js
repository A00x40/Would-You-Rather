import { RECIEVE_QUESTIONS } from '../actions/questions'

export default (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_QUESTIONS :
            return {
                ...state,
                ...action.payload.questions
            }
        default:
            return state
    }
}