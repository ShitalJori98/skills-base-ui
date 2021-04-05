import React from 'react'
import {connect} from 'react-redux';
 function Notification(props) {

    const { showNotification, notificationMessage } = props.AppReducer;
    if(showNotification) {
        return( 
                <div className='ui success message'>
                    <div classNmae='header'>
                        {
                            notificationMessage
                        }
                    </div>
                </div>
            )
     }

     return null;
}


const mapStateToProps = (state) => {
    return {
        // UserReducer: state.UserReducer
        AppReducer:state.AppReducer
    }
}

const mapDispatchToProps = dispatch => ({
    // onSignUpFormChange: (key, value) => {
    //     dispatch(onSignUpFormChange(key, value));
    //}

});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);