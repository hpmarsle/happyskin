import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../../actions/loginForm'

function Login({username, password, updateLoginForm }) {

    return (
        <div>
            <h1>Login/SignUp</h1>
            <h4>This will be Login / Setup Account page feature.</h4>
            <form>
                <input value={username} name="username" onChange={updateLoginForm} type='text' placeholder='username' />
                <input value={password} name="password" onChange={updateLoginForm} type='password' placeholder='password' />
                <input value={undefined} onChange={undefined} type='submit' placeholder='Login/Signup' />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password
    }
}
export default connect(mapStateToProps, { updateLoginForm })(Login)