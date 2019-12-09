
export default (init=false, action) =>{
    if(action.type === 'LOGGED_IN'){
        if(action.payload === true){
            return true;
        }else{
            return false;
        }
    }else{
        return init
    }
}