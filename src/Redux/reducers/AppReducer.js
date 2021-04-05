//appReducer
const initialState = {
    notificationMessage: '',
    showNotification: false
}

export const AppReducer = (state = initialState , action) => {
   
    switch(action.type){
        
        case 'SHOW_SUCCESS_MESSAGE': {
            console.log("reducers", action);

            return {
                ...state,
                showNotification: true,
                notificationMessage: action.payload
            }
        }
        default : 
            return state
    }

}

export default AppReducer;