import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../../actions/loginForm'
import { login } from '../../actions/currentUser'

function Login({loginFormData, updateLoginForm }) {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        login(loginFormData)
    }

    return (
        <div>
            <h1>Login/SignUp</h1>
            <h4>This will be Login / Setup Account page feature.</h4>
            <form onSubmit={handleSubmit}>
                <input value={loginFormData.username} name="username" onChange={handleInputChange} type='text' placeholder='username' />
                <input value={loginFormData.password} name="password" onChange={handleInputChange} type='password' placeholder='password' />
                <input type='submit' placeholder='Login/Signup' />
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