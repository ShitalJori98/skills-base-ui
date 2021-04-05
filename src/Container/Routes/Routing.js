import React from 'react'
import { Link, Route, Switch ,NavLink, Router} from 'react-router-dom'
import Notification from '../../Components/Notifications/Notification';
import Home from '../Home/Home'
import Signin from '../SignIn/Signin'
import Signup from '../SignUp/Signup';
import Header from './../../Components/Header/Header';
import './Routing.css'
function Routing() {
    return (
        <div className="container">
            
            {/* <Link to="/">Home</Link>
            <Link to ="/signup">SignUp</Link>
            <Link to="/signin">SignIn</Link> */}
            <Notification/>
            <Header />
            <Switch>
            <Route path="/" component={Home} exact/>
            <Route path ="/signin" component={Signin}/>
            <Route path = "/signup" component ={Signup} />

            </Switch>
            
        </div>
    )
}

export default Routing
