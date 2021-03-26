import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Signin from '../SignIn/Signin'
import Signup from '../SignUp/Signup'

function Routing() {
    return (
        <div>
            
            <Link to="/">Home</Link>
            <Link to ="/signup">SignUp</Link>
            <Link to="/signin">SignIn</Link>



            <Switch>
            <Route path="/" component={Home} exact/>
            <Route path ="/signin" component={Signin}/>
            <Route path = "/signup" component ={Signup} />
            </Switch>
        </div>
    )
}

export default Routing
