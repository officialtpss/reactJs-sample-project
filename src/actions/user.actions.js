import { userConstants } from '../constants';
import { userService } from './../services';
import { alertActions } from './';
import history from './../helper/history';
export const userActions = {
    login,
    logout
};

function login(data) {
    return dispatch => {
        dispatch(request({ data }));
          try{
           setTimeout(()=>{
            userService.login(data)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/dashboard');
                },
                error => {
                    dispatch(failure(error));
                    if(error.length){
                        dispatch(alertActions.error(error));
                    }else{
                        dispatch(alertActions.error('Not found'));
                    }
                 
                }
            );
           }, 500);
          }catch(err){
            dispatch(failure(err));
            dispatch(alertActions.error(err));
          }
    };
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}