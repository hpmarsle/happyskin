import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../../actions/loginForm'

function Login({loginForm, updateLoginForm }) {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }
    return (
        <div>
            <h1>Login/SignUp</h1>
            <h4>This will be Login / Setup Account page feature.</h4>
            <form>
                <input value={loginForm.username} name="username" onChange={handleInputChange} type='text' placeholder='username' />
                <input value={loginForm.password} name="password" onChange={handleInputChange} type='password' placeholder='password' />
                <input type='submit' placeholder='Login/Signup' />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}
export default connect(mapStateToProps, { updateLoginForm })(Login)