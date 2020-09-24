//asynchronous action creator
export const login = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
    }
}