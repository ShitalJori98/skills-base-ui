import React , {useState ,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from '../SignUp/Signup';
import { useHistory } from "react-router-dom";
import './Signin.scss';
import Notification from '../../Components/Notifications/Notification';

toast.configure()

function Signin() {

    var initialState = {username:"" ,
                        password:"" ,
                        allUserDetails:[] };
    const [state, setstate] = useState(initialState)

    let history = useHistory();
   const onChange=(e)=>{
                setstate({...state,
                   [e.target.name]:e.target.value
                })
             }

    const SignIn=(e)=>{
        e.preventDefault();
        
        if(checkUserValid()){

        }

        else {

        }
    }

    const SignUp=(e)=>{
        history.push("/signup");
    }

    useEffect(() => {
        setstate({
            ...state , allUserDetails:JSON.parse(localStorage.getItem('UsersData'))
        })
    }, [])

    const checkUserValid=()=>{
               
        const username=state.username
           const password=state.password
               const AllUserDetails=state.allUserDetails

                let flag=false;

                let message ="";

                 for(var user of AllUserDetails){
                     AllUserDetails.map((user,id)=>{})
              
                    if(username==user.Email && password==user.Password && user.isAdmin==true){

                        flag =true;
                        message ="Admin Login Successfull";

                        break;
                        
                    }
                   else if(username==user.Email && password==user.Password && user.isAdmin==false){
                      
                    flag =true;
                    message ="User Login Successfull";
                    break;
                    }


                   
                }

                if(flag){
                    toast.success(message)
                }
                else {
                    toast.error("Invalid username/password")
                }

                return flag;
            }



    return (
        <div className='container center from-group sign-in'>
        <center>
            <h3>Signin</h3>
            <div className="row">
                <form autoComplete='off' className="m-5 col-md-10">
                  <div className='row'>
                     <div className='input-field col s12'>
                      <input type='text' name='username' value={state.username} placeholder='username/email' onChange={onChange} className='from-control validate'/> 
                      </div>
                      </div>

                      <div className='row'>
                      <div className='input-field col s12'>
                      <input type='password' name='password' value={state.password} placeholder='password' onChange={onChange} className='from-control validate'/> 
                    </div>
                    </div>
                   
                    <button type='button' className='btn btn-primary ' onClick={SignIn}>Sign in</button>&nbsp;&nbsp;&nbsp;
                    <button type='button' className='btn btn-primary ' onClick={SignUp}>Sign Up</button>
                </form>
            </div>
        </center>
    </div>
)
    
}

 export default Signin
