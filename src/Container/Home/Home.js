import React , {useEffect} from 'react'
import { connect } from 'react-redux'


function Home({user}) {
    useEffect(() => {
        console.log(user)
    }, [])
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { user: state.UserReducer.user }
}

export default connect(mapStateToProps)(Home)
