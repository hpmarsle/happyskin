import React from 'react'
import { connect } from 'react-redux'

function Login({username, password}) {
    return (
        <div>
            <h1>Login/SignUp</h1>
            <h4>This will be Login / Setup Account page feature.</h4>
            <form>
                <input value={username} onChange={undefined} type='text' placeholder='username' />
                <input value={password} onChange={undefined} type='password' placeholder='password' />
                <input value={undefined} onChange={undefined} type='submit' placeholder='Login/Signup' />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.username,
        password: state.password
    }
}
export default connect(mapStateToProps)(Login)