import React from 'react'
import { Link, Route, Switch ,NavLink, Router} from 'react-router-dom'
import Home from '../Home/Home'
import Signin from '../SignIn/Signin'
import Signup from '../SignUp/Signup'
import './Routing.css'
function Routing() {
    return (
        <div className="container">
            
            {/* <Link to="/">Home</Link>
            <Link to ="/signup">SignUp</Link>
            <Link to="/signin">SignIn</Link> */}
            
            <div class="topnav">
                
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
            <NavLink to="/signin">SignIn</NavLink>
            </div>

            <Switch>
            <Route path="/" component={Home} exact/>
            <Route path ="/signin" component={Signin}/>
            <Route path = "/signup" component ={Signup} />
            </Switch>
            
        </div>
    )
}

export default Routing
