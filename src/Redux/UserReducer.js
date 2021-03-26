
import React from 'react'

const initialState = {user :{name:"abcd"}}

export const UserReducer = (state = initialState , action) => {
   
    switch(action.type){

        case 'GET_USER':
            return {...state}

        default : 
            return state
    }

}

export default UserReducer;