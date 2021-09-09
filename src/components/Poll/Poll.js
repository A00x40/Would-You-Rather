import React from 'react'
import { connect, useDispatch } from 'react-redux';
import { formatDate } from '../../utils/_DATA.js'
import { answerQuestion } from '../../actions/questions'

 
const Poll = (props) => {

    const { users, question, authedUser, id } = props

    const author = users[question.author]
    const { timestamp } = question
    const optionOneVoted = question.optionOne.votes.includes(authedUser.id)
    const optionTwoVoted = question.optionTwo.votes.includes(authedUser.id)

    const dispatch = useDispatch()

    const changeCategory = (e,id) => {
        e.preventDefault()
        if(e.target.className !== "unactive" && e.target.className !== "active")
            dispatch(answerQuestion(id, e.target.id, authedUser.id))
    }

    return (
        <div className='question' style={{margin:"20px auto"}}>
            <img
                src={author.avatarURL}
                alt={`Avatar of ${author.name}`}
                className='avatar'
            />
            <div className='question-info'>
                <div>{formatDate(timestamp)}</div>
                <ul className='option'>
                    <li>
                        <label className={ optionOneVoted ? "active" : "" - optionTwoVoted ? "unactive" : "" } id="optionOne" onClick={(e) => changeCategory(e,id)}>
                            {question.optionOne.text}
                        </label>
                        {
                            optionOneVoted 
                            ? <p>{question.optionOne.votes.length} voted - Percentage { (100 * question.optionOne.votes.length / Object.keys(users).length).toPrecision(5) }%</p>
                            : <p>0 votes</p>
                        }
                    </li>
                    <li>
                        <label className={ optionTwoVoted ? "active" : "" - optionOneVoted ? "unactive" : "" } id="optionTwo" onClick={(e) => changeCategory(e,id)}>
                            {question.optionTwo.text}
                        </label>
                        {
                            optionTwoVoted 
                            ? <p>{question.optionTwo.votes.length} voted - Percentage { (100 * question.optionTwo.votes.length / Object.keys(users).length).toPrecision(5) }%</p>
                            : <p>0 votes</p>
                        }
                    </li>
                </ul>  
            </div> 
        </div>
    );
}

const mapStateToProps = ({ users, questions, authedUser } , {id}) => {
    return {
        users,
        question: questions[id], 
        authedUser
    }
}

 
export default connect(mapStateToProps)(Poll);