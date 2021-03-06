import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { handleLogout } from '../../actions/authedUser'
 
const Leaderboard = (props) => {

    const { users, usersIds, location } = props
    const dispatch = useDispatch()

    if(location.state === undefined) {
        dispatch(handleLogout()) 
        return  (
            <Redirect to={{
                pathname: '/',
                state: { from: `/leaderboard` }
            }} />
        )
    }
  
    return (
        <div>
            <h1 className='header1'>LeaderBoard</h1>
            <ul>
                {
                    usersIds.map( (k) => {
                        const author = users[k]
                        
                        return(
                            <li key={k}>
                                <div className='user' style={{margin:"20px auto"}}>
                                    <img
                                        src={author.avatarURL}
                                        alt={`Avatar of ${author.name}`}
                                        className='avatar'
                                    />
                                    <div className='user-info'>
                                        <ul>
                                            <li>
                                                <label>{author.name}</label>
                                            </li>
                                            <li>
                                                <label>Questions Asked {author.questions.length}</label>
                                            </li>
                                            <li>
                                                <label>Questions Answered {Object.keys(author.answers).length}</label>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}
 
const mapStateToProps = ({ users }) => {
    return {
        users,
        usersIds: Object.keys(users).sort( (a,b) => 
            (users[b].questions.length + Object.keys(users[b].answers).length) -
            (users[a].questions.length + Object.keys(users[a].answers).length)
        )
    }
}

export default connect(mapStateToProps)(Leaderboard)