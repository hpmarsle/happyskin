import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/currentUser'
import { withRouter } from 'react-router-dom'

function Logout({ logout, history }) {

    return (
        <div>
            <h1>Logout</h1>
            <form onSubmit={e =>{ 
                e.preventDefault()
                logout()
                history.push("/")
            }}>
                <input type='submit' value='Logout' />
            </form>
        </div>
    )
}

export default withRouter(connect(null, { logout })(Logout))