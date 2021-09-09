import { questionsConstants } from '../constants'

/** Action Creators */
export const recieveQuestions = (questions) => ({
    type: questionsConstants.RECIEVE_QUESTIONS,
    payload: {
        questions
    }
})

export const answerQuestion = (id, option, userId) => ({
    type: questionsConstants.ANSWER_QUESTION,
    payload: {
        id,
        option,
        userId
    }
})