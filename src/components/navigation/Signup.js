import React from 'react'
import { updateSignupForm } from '../../actions/signupForm'
import { signup } from '../../actions/currentUser'

import { connect } from 'react-redux'

function Signup({ signupFormData, updateSignupForm, signup, history }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value,
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={signupFormData.name}
          onChange={handleInputChange}
          name='name'
          type='text'
          placeholder='name'
        />
        <input
          value={signupFormData.email}
          onChange={handleInputChange}
          name='email'
          type='email'
          placeholder='email'
        />
        <input
          value={signupFormData.username}
          onChange={handleInputChange}
          name='username'
          type='text'
          placeholder='username'
        />
        <input
          value={signupFormData.password}
          onChange={handleInputChange}
          name='password'
          type='password'
          placeholder='password'
        />
        <input type='submit' value='Signup' />
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupForm,
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
