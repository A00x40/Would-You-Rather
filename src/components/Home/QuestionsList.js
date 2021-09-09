import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/_DATA.js'
import { answerQuestion } from '../../actions/questions'

const QuestionsList = (props) => {

    const { questions, List, users, authedUser } = props
    const dispatch = useDispatch()

    const changeCategory = (e,id) => {
        e.preventDefault()
        dispatch(answerQuestion(id, e.target.id, authedUser.id))
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
                                            <label className={ optionOneVoted ? "active" : "" } id="optionOne" onClick={(e) => changeCategory(e,k)}>
                                                {questions[k].optionOne.text}
                                            </label>
                                        </li>
                                        <li>
                                            <label className={ optionTwoVoted ? "active" : "" } id="optionTwo" onClick={(e) => changeCategory(e,k)}>
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
                