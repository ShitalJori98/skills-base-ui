import {
    ON_SIGNUP_FORM_CHANGE
} from '../ActionTypes';

const initialState = {
    user: {
        FullName: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        firstnameError: '',
        passwordError: '',
        emailError: '',
        userid: ''
    }
}

export const UserReducer = (state = initialState , action) => {
   
    switch(action.type){

        case 'GET_USER':
            return {...state}
        
        case ON_SIGNUP_FORM_CHANGE: {
            const { key, value } = action.payload;
            return {
                ...state,
                user: {
                    ...state.user,
                    [key]: value
                }
                
            }
        }
            
        default : 
            return state
    }

}

export default UserReducer;