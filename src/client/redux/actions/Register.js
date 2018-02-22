import { REGISTER_SUCCESS, REGISTER_FAILURE } from './types';

export const registerSuccess = () => {
    return {
        type: REGISTER_SUCCESS
    }
}

export const registerFailure = (error) => {
    return {
        type: REGISTER_FAILURE,
        error
    }
}

// Async actions creators
/*
export const register = (values) => {
    return function(dispatch) {
        
        try {

            var headers = new Headers();
            headers.append("Content-Type", "application/json");
    
            //const socket = socketIOClient('http://localhost:3000');

            fetch('http://192.168.1.200/yooinenterprise/auth/users',{
                method: 'POST',
                headers: headers,
                body: JSON.stringify(values)
            })
            .then((res) => {
    
                if(res.status === 200) {
                    return dispatch(registerSuccess());
                }
            })
            .catch((error) => {
                console.log(error);
                return dispatch(registerFailure(error))
            });


        } catch(error) {
        
            return dispatch(registerFailure(error))
        }
    }
} 
*/
