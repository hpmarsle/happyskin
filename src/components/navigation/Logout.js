import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/currentUser'

function Logout({ logout }) {

    return (
        <div>
            <h1>Logout</h1>
            <form onSubmit={logout}>
                <input type='submit' value='Logout' />
            </form>
        </div>
    )
}

export default connect(null, { logout })(Logout)