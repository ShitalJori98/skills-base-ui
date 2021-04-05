import React from 'react'
import {connect} from 'react-redux';
 function Notification(props) {
     console.log(props.AppReducer.notificationMessage);
    return (
        <div>

               {
            props.AppReducer.showNotification && 
                  
                <div className='ui success message'>
                        <div classNmae='header'>Form Completed</div>
              
                </div>}
        </div>
    )
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

