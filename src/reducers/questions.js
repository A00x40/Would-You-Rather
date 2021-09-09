import { questionsConstants } from '../constants'

const questions = (state = {}, action) => {
    switch (action.type) {
        case questionsConstants.RECIEVE_QUESTIONS :
            return {
                ...state,
                ...action.payload.questions
            }
        case questionsConstants.ANSWER_QUESTION :
            const { id, option, userId } = action.payload
            return {
                ...state,
                [id] : {
                    ...state[id] ,
                    [option]: {
                        ...state[id][option] ,
                        votes: state[id][option].votes.concat([userId])
                    }
                }
            }
        default:
            return state
    }
}

export default questions