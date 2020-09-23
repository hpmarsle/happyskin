const initialState = {
    username: "",
    password: ""
}
export default (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_LOGIN_FORM":
            return {
                ...state,
                username: action.username,
                password: action.password
            }
        default:
            return state
    }
}