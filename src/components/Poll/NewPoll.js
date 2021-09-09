import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { handleSaveQuestion } from '../../actions/questions'

const NewPoll = (props) => {

    const { users, authedUser } = props
    
    const history = useHistory()
    const dispatch = useDispatch()

    const [state, setstate] = useState({
        option1: '',
        option2: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setstate( (prevState) => ({
            ...prevState ,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleSaveQuestion(state.option1, state.option2, authedUser.id))
        history.push('/')
    }

    return (
        <div>
            <h1 className='header1'>Welcome {users[authedUser.id].name}</h1>
            <h2 className='center'>Create New Poll</h2>
            <form className='question' onSubmit={(e) => handleSubmit(e)}>                    
                <div className='question-info'>                    
                    <input type='text' name='option1' placeholder='Option 1' value={state.option1 || ""} onChange={(e) => handleChange(e)}/>
                    <input type='text' name='option2' placeholder='Option 2' value={state.option2 || ""} onChange={(e) => handleChange(e)}/>
                    <button
                        className='form-btn'
                        type='submit'
                        disabled= { (state.option1 !== '' && state.option2 !== '') ? false : true }
                    >Submit</button>  
                </div>                    
            </form>
        </div>
    );
}

const mapStateToProps = ({ users, authedUser }) => {
    return {
        authedUser,
        users
    }
}
 
export default connect(mapStateToProps)(NewPoll)