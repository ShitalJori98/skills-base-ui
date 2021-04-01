import React , {useEffect} from 'react'
import { connect } from 'react-redux'
import './Home.css'

function Home({user}) {
    useEffect(() => {
        console.log(user)
    }, [])
    return (
        <div className='home'>
            <main>
            <h2 style={{textAlign:'center',fontFamily:  'Fantasy'}}>Welcome to application</h2>
            <h1 style={{textAlign:'center'}}>Employee Skill Base </h1>
            </main>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return { user: state.UserReducer.user }
}

export default connect(mapStateToProps)(Home)
