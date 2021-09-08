import { questionsConstants } from '../constants'

/** Action Creators */
export const recieveQuestions = (questions) => ({
    type: questionsConstants.RECIEVE_QUESTIONS,
    payload: {
        questions
    }
})