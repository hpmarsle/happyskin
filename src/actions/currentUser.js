export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user,
  }
}

export const clearCurrentUser = () => {
  return {
    type: 'CLEAR_CURRENT_USER',
  }
}

export const getCurrentUser = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/get_current_user', {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          alert(user.error)
        } else if (user === '') {
          return
        } else {
          dispatch(setCurrentUser(user))
        }
      })
  }
}

export const login = (credentials, history) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
          history.push('/')
        }
      })
      .catch(console.log)
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3000/api/v1/logout', {
      credentials: 'include',
      method: 'DELETE',
    })
  }
}

export const signup = (signupFormInfo, history) => {
  return (dispatch) => {
    const userInfo = {
      user: signupFormInfo,
    }
    return fetch('http://localhost:3000/api/v1/signup', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
          history.push('/')
        }
      })
      .catch(console.log)
  }
}
