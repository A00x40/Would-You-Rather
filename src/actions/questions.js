/** Action Types */
export const RECIEVE_QUESTIONS = "RECIEVE_QUESTIONS"

/** Action Creators */
export const recieveQuestions = (questions) => ({
    type: RECIEVE_QUESTIONS,
    payload: {
        questions
    }
})