export const isLoggedIn = (bool) =>{
    return {
        type: 'LOGGED_IN',
        payload: bool
    }
}