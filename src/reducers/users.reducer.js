import { userConstants } from '../constants';

export function users(state = {}, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
           return {
                loading: true
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                items: action.users
            };
        case userConstants.LOGIN_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}