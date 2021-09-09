import { questionsConstants } from '../constants'
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

/** Action Creators */
export const recieveQuestions = (questions) => ({
    type: questionsConstants.RECIEVE_QUESTIONS,
    payload: {
        questions
    }
})

export const answerQuestion = (userId, qid, option) => ({
    type: questionsConstants.ANSWER_QUESTION,
    payload: {
        userId,
        qid,
        option
    }
})

export const handleSaveQuestionAnswer = (authedUser, qid, answer) => {
    return async (dispatch) => {
        console.log(authedUser, qid, answer)
        dispatch(answerQuestion(authedUser, qid, answer))
        _saveQuestionAnswer({authedUser, qid, answer})
    }
}

export const saveQuestion = (question) => ({
    type: questionsConstants.SAVE_QUESTION,
    payload: {
        question
    }
})

export const handleSaveQuestion = (optionOneText, optionTwoText, author) => {
    return async (dispatch) => {
        _saveQuestion({ optionOneText, optionTwoText, author}).then((formattedQuestion) => {
            dispatch(saveQuestion(formattedQuestion))
        })
    }
}