import React from 'react'
import { useDispatch } from 'react-redux'

import { handleLogout } from '../../actions/authedUser'
 
const Home = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleLogout())
    }    
    return (
        <div>
            Home
            <button onClick={(e)=>handleSubmit(e)}/>
        </div>
    )
}
 
export default Home