import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from 'react-redux'
import './App.css'
import LoadingBar from 'react-redux-loading'
import Login from './components/Login/Login'
import Home from './components/Home/Home'


const App = (props) => {
    
    const { isLoggedIn } = props
    return (
        <Router>
            <Fragment>
                <LoadingBar /> 
                <Route exact path='/' render={ () =>
                    !isLoggedIn 
                    ? <Login />
                    : <Home />
                } />
            </Fragment>
        </Router>
    )
}

const mapStateToProps = ({ authedUser }) => {
    return {
        isLoggedIn: authedUser.loggedIn ? true : false ,
    }
}
export default connect(mapStateToProps)(App)