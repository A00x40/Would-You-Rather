import { userConstants, questionsConstants } from '../constants'

const users = (state = {}, action) => {
    switch (action.type) {
        case userConstants.RECIEVE_USERS :
            return {
                ...state,
                ...action.payload.users
            }
        case questionsConstants.ANSWER_QUESTION: 
            const { qid, option, userId } = action.payload
            return {
                ...state,
                [userId]: {
                    ...state[userId],
                    answers: {
                      ...state[userId].answers,
                      [qid]: option
                    }
                }
            }
        case questionsConstants.SAVE_QUESTION:
            const question = action.payload.question
            return {
                ...state,
                [question.author]: {
                  ...state[question.author],
                  questions: state[question.author].questions.concat([question.id])
                }
            }
        default:
            return state
    }
}

export default users