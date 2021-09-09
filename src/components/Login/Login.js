import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleLogin } from '../../actions/authedUser'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {

    const dispatch = useDispatch()

    const [state, setstate] = useState({
        id: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setstate( () => ({ [name]: value }) )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { id } = state
        dispatch(handleLogin(id))
    }    
    
    const { id } = state

    return (
        <div className='form-container'>
            <Form name='form' onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>User ID</Form.Label>
                    <Form.Control 
                        type='text' 
                        name='id'
                        placeholder='Enter user id' 
                        value={id}
                        onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
        
                <Button variant='primary' type='submit' disabled={id === ''}>Login</Button>
            </Form>
        </div>
    )
}

export default Login