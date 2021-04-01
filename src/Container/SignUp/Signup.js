import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function Signup() {
    let initialState = {
        FullName: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        firstnameError: '',
        passwordError: '',
        emailError: '',
        userid: ''
    }
    const [state, setstate] = useState(initialState)
    const onChange = e => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    let validForm = () => {
        var isValid = true;
        if (state.FullName.length === 0) {
            setstate({...state ,
                firstnameError: 'firstName should not be empty'
            })
            isValid = false
        }
        else if (state.FullName.length > 0) {
            setstate({ ...state,
                firstnameError: ''
            })
            isValid = true
        }
        if (!state.Email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            setstate({...state , emailError: 'email should contain @ & .' })
            isValid = false
        }
        else if (state.Email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            setstate({...state , emailError: '' })
            isValid = true
        }
        if (!state.Password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
            setstate({...state , passwordError: 'password should contain atleast 1 special symbol 1 capital & length=8' })
            isValid = false
        }
        else if (state.Password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
            setstate({ ...state ,
                passwordError: ''
            })
            isValid = true
        }
        if (state.Password != state.ConfirmPassword) {
            setstate({ ...state ,
                passwordError: 'password and confirm password not match'
            })
            isValid = false
        }
        else if (state.Password = state.ConfirmPassword) {
            setstate({...state, passwordError: '' })
            isValid = true
        }
        return isValid
    }
    const submitData = e => {
        e.preventDefault();

        const val = validForm();
        var allUserDetails = JSON.parse(localStorage.getItem('UsersData'))
        var a = true
        if (allUserDetails != null) {
            allUserDetails.map(user => {
                if (user.Email === state.Email) {
                    a = false;
                }
            })
        }
        if (allUserDetails == null) {
            
            allUserDetails = []
            if (val == true) {
                const userDetails = {
                    isAdmin: false,
                    FirstName: state.FullName,
                    Email: state.Email,
                    Password: state.Password,
                    ConfirmPassword: state.ConfirmPassword,
                    userid: allUserDetails.length + 1
                }
                allUserDetails.push(userDetails)
                localStorage.setItem('UsersData', JSON.stringify(allUserDetails))
                toast.success("data added to localstorage")
               
            }
        }
        else if (allUserDetails != null) {
            if (val == true) {
                if (a == true) {
                    const userDetails = {
                        isAdmin: false,
                        FirstName: state.FullName,
                        Email: state.Email,
                        Password: state.Password,
                        ConfirmPassword: state.ConfirmPassword,
                        userid: allUserDetails.length + 1
                    }
                    allUserDetails.push(userDetails)
                    localStorage.setItem('UsersData', JSON.stringify(allUserDetails))
                    toast.success("data added to localstorage")
                }
                else {
                    toast.error("your email is already registered........")
                }
            }
            else {
                toast.error("something is wrong........")
            }
        }
    }
    return (
        <div className='container'>
            <form autoComplete="off">
                <div>
                    <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
                </div>
                <div className='col-md-10 form-group'>
                    <label className='float-left block-text text-darken-2 s'>FullName:<span aria-hidden='true' style={{ color: 'red' }}>*</span>                     </label>
                    <input type="text" name='FullName' value={state.FullName} onChange={onChange} placeholder='FullName' required className='form-control' />
                    <pre style={{ color: 'red' }}>{state.firstnameError}</pre>
                </div>
                <div className='col-md-10 form-group'>
                    <label className='float-left block-text-darken-2 s'>Email:<span aria-hidden='true' style={{ color: 'red' }}>*</span>
                    </label>
                    <input type="text" name='Email' value={state.Email} onChange={onChange} placeholder='Email' required className='form-control' />
                    <pre style={{ color: 'red' }}>{state.emailError}</pre>
                </div>
                <div className='col-md-10 form-group'>
                    <label className='float-left block-text-darken-2 s'>Password:<span aria-hidden='true' style={{ color: 'red' }}>*</span>
                    </label>
                    <input type="password" name='Password' value={state.Password} onChange={onChange} placeholder='Password' required className='form-control' />
                    <pre style={{ color: 'red' }}>{state.passwordError}</pre>
                </div>
                <div className='col-md-10 form-group'>
                    <label className='float-left block-text-darken-2 s'>ConfirmPassword:<span aria-hidden='true' style={{ color: 'red' }}>*</span>
                    </label>
                    <input type="password" name='ConfirmPassword' value={state.ConfirmPassword} onChange={onChange} placeholder='ConfirmPassword' required className='form-control' />
                    <pre style={{ color: 'red' }}>{state.passwordError}</pre>
                </div>
                <button type='button' className='btn btn-primary m-2' onClick={submitData}>Sign Up</button>
            </form>
        </div>
    )
}
export default Signup



