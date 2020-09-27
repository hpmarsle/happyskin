import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../../actions/loginForm'
import { login } from '../../actions/currentUser'


function Login({loginFormData, updateLoginForm, login, history }) {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input value={loginFormData.username} name="username" onChange={handleInputChange} type='text' placeholder='username' />
                <input value={loginFormData.password} name="password" onChange={handleInputChange} type='password' placeholder='password' />
                <input type='submit' value="Login" />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}
export default connect(mapStateToProps, { updateLoginForm, login })(Login)