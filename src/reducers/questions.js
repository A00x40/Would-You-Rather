import { questionsConstants } from '../constants'

const questions = (state = {}, action) => {
    switch (action.type) {
        case questionsConstants.RECIEVE_QUESTIONS :
            return {
                ...state,
                ...action.payload.questions
            }
        case questionsConstants.ANSWER_QUESTION :
            const { qid, option, userId } = action.payload
            return {
                ...state,
                [qid] : {
                    ...state[qid] ,
                    [option]: {
                        ...state[qid][option] ,
                        votes: state[qid][option].votes.concat([userId])
                    }
                }
            }
        case questionsConstants.SAVE_QUESTION:
            return {
                ...state,
                [action.payload.question.id]: action.payload.question
            }
        default:
            return state
    }
}

export default questions