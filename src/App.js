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
import Leaderboard from './components/Poll/Leaderboard'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    if(rest.isLoggedIn)
        return (
            <Route {...rest} render={
                props => <Component {...rest} {...props} />
            } />
        )
    else {
        alert('Please Login First')
        return (
            <Redirect to='/'/>
        )
    }
}

const App = (props) => {
    
    const { isLoggedIn } = props
    return (
        <Router>
            <Fragment>
                <LoadingBar style={{ backgroundColor: 'red', height: '5px' }} />
                <Navigation isLoggedIn={isLoggedIn}/>

                <Switch>
                    <Route exact path='/' render={ (props) =>
                        !isLoggedIn 
                        ? <Login location={props.location}/>
                        : <Home  location={props.location}/>
                    } />

                    <ProtectedRoute exact path='/add' component={NewPoll} location={props.location} isLoggedIn={isLoggedIn}/>
                    <ProtectedRoute exact path='/leaderboard' component={Leaderboard} location={props.location} isLoggedIn={isLoggedIn}/>
                    <ProtectedRoute exact path='/questions/:id' component={Poll} location={props.location} isLoggedIn={isLoggedIn}/>
                    
                    <Route exact path='/notfound' component={NotFound} />
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