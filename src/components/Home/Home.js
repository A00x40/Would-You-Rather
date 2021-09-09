import React, { useState } from 'react'
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList'

const Home = (props) => {

    const {  users, authedUser, questions, answered, notAnswered } = props

    const [displayAnswered, setdisplayAnswered] = useState({
        display: false
    })

    const handleToggle = () => {
        setdisplayAnswered( (prevDisplay) => ({
            display: !prevDisplay.display
        }))
    }

    return (
        <div>
            <header className='header1'>
                <h1>Welcome {users[authedUser.id].name}</h1>
                <h1>Would You Rather?</h1>
                <button onClick={handleToggle}> { 
                    !displayAnswered.display
                    ? "Click to Display Answered"
                    : "Click to Display UnAnswered"
                } </button>
            </header>
            {
                !displayAnswered.display
                ? (
                    <div>
                        <h3 className='center'>UnAnswered</h3>
                        <QuestionsList authedUser={authedUser} users={users} questions={questions} List={notAnswered}/>
                    </div>
                )
                : (
                    <div>
                        <h3 className='center'>Answered</h3>
                        <QuestionsList authedUser={authedUser} users={users} questions={questions} List={answered}/>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = ({ questions, authedUser, users }) => {
    return {
        authedUser,
        questions,
        users,
        answered: Object.keys(questions)
        .filter( key => 
            questions[key].optionOne.votes.includes(authedUser.id)
            || questions[key].optionTwo.votes.includes(authedUser.id)
        ).sort( (a,b) => questions[b].timestamp - questions[a].timestamp ) ,

        notAnswered: Object.keys(questions)
        .filter( key => 
            !questions[key].optionOne.votes.includes(authedUser.id)
            && !questions[key].optionTwo.votes.includes(authedUser.id)
        ).sort( (a,b) => questions[b].timestamp - questions[a].timestamp ) 
    }
}

export default connect(mapStateToProps)(Home)
