import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import './App.css'

import LoadingBar from 'react-redux-loading'
import Navigation from './components/common/Nav'
import NotFound from './components/common/NotFound'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Poll from './components/Poll/Poll'
import NewPoll from './components/Poll/NewPoll'

const App = (props) => {
    
    const { isLoggedIn } = props
    return (
        <Router>
            <Fragment>
                <LoadingBar style={{ backgroundColor: 'red', height: '5px' }} />
                <Navigation isLoggedIn={isLoggedIn}/>

                <Switch>

                <Route exact path='/' render={ () =>
                    !isLoggedIn 
                    ? <Login />
                    : <Home />
                } />

                <Route exact path='/add' render={ () => {
                    if(isLoggedIn) 
                        return (
                            <NewPoll />
                        )

                    alert("Please Login")
                    return (
                        <Redirect to='/' />
                    )
                }} />

                <Route exact path='/leaderboard' render={ () => {
                    if(isLoggedIn) 
                        return (
                            <div>leaderboard</div>
                        )

                    alert("Please Login")
                    return (
                        <Redirect to='/' />
                    )
                }} />

                <Route exact path='/questions/:id' render={ (props) => {
                    if(isLoggedIn) 
                        return (
                            <Poll id={props.match.params.id}/>
                        )

                    alert("Please Login")
                    return (
                        <Redirect to='/' />
                    )
                }} />

                <Route path='*' component={NotFound} />

                </Switch>

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