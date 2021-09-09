import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { formatDate } from '../../utils/_DATA.js'
import { handleSaveQuestionAnswer } from '../../actions/questions'

const QuestionsList = (props) => {

    const { questions, List, users, authedUser } = props
    const dispatch = useDispatch()
    const history = useHistory()

    const changeCategory = (e,qid) => {
        e.preventDefault()
        if(e.target.className !== "unactive" && e.target.className !== "active") {
            dispatch(handleSaveQuestionAnswer( authedUser.id, qid, e.target.id))
            history.push(`/questions/${qid}`)
        }
    }

    return (
        <ul>
            {
                List.map( (k) => {
                    const author = users[questions[k].author]
                    const { timestamp } = questions[k]

                    const optionOneVoted = questions[k].optionOne.votes.includes(authedUser.id)
                    const optionTwoVoted = questions[k].optionTwo.votes.includes(authedUser.id)
                    
                    return(
                        <li key={k}>
                            <div className='question'>
                                <img
                                    src={author.avatarURL}
                                    alt={`Avatar of ${author.name}`}
                                    className='avatar'
                                />
                                <div className='question-info'>
                                    <div>{formatDate(timestamp)}</div>
                                    <ul className='option'>
                                        <li>
                                            <label className={ optionOneVoted ? "active" : "" - optionTwoVoted ? "unactive" : "" } id="optionOne" onClick={(e) => changeCategory(e,k)}>
                                                {questions[k].optionOne.text}
                                            </label>
                                        </li>
                                        <li>
                                            <label className={ optionTwoVoted ? "active" : "" - optionOneVoted ? "unactive" : "" } id="optionTwo" onClick={(e) => changeCategory(e,k)}>
                                                {questions[k].optionTwo.text}
                                            </label>
                                        </li>
                                    </ul>  
                                    <Link to={`/questions/${k}`}>Details</Link>                            
                                </div>  
                                
                            </div>  
                                             
                        </li>
                    )
                })
            }
        </ul>
    );
}
 
export default QuestionsList
                