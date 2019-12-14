export const isLoggedIn = (bool) =>{
    return {
        type: 'LOGGED_IN',
        payload: bool
    }
}

export const loginToken = (token) =>{
    return{
        type: 'TOKEN_TRUE',
        payload: token
    }
}
export const setUser = (user) =>{
    return{
        type: 'USER_NAME',
        payload: user
    }
}