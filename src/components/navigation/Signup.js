import React from 'react'

export default function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault()

    //send form and create new user with it, send to backend
  }
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input name='name' type='text' placeholder='name' />
        <input name='email' type='email' placeholder='email' />
        <input name='username' type='text' placeholder='username' />
        <input name='password' type='password' placeholder='password' />
        <input type='submit' value='Signup' />
      </form>
    </div>
  )
}
