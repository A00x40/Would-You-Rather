import { questionsConstants } from '../constants'

const questions = (state = {}, action) => {
    switch (action.type) {
        case questionsConstants.RECIEVE_QUESTIONS :
            return {
                ...state,
                ...action.payload.questions
            }
        default:
            return state
    }
}

export default questions