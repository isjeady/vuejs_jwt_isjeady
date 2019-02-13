import { AUTH_LOGIN,AUTH_LOGOUT } from './actions.type'
import { SET_AUTH,SET_AUTH_ERROR } from './mutations.type'
import ApiService from '@/common/api.service'
import JwtService from '@/common/jwt.service'

const state = {
    token: JwtService.getToken() || '',
    status: '',
}

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
}

const actions = {
    [AUTH_LOGIN](context, payload) {
        console.log("LOGIN_REQUEST");
        return ApiService
            .post('/auth/login', payload)
            .then( response => {
                console.log(response.data);
                const token = response.data.access_token;
                JwtService.saveToken(token);
                context.commit(SET_AUTH, {'status' : 'success', 'token' : token});
                return response;
            })
            .catch(( error ) => {
                context.commit(SET_AUTH_ERROR, error);
                JwtService.destroyToken();
                console.log(error);
                return error;
            })      
    },
    [AUTH_LOGOUT](context){
        return ApiService
            .post('/auth/logout',{})
            .then( response => {
                context.commit(SET_AUTH, {'status' : 'logout', 'token' : ''});
                context.commit('setCurrentUser', {});
                JwtService.destroyToken();
                return response;
            })
            .catch(( error ) => {
                context.commit(SET_AUTH, {'status' : 'logout', 'token' : ''});
                context.commit('setCurrentUser', {});
                JwtService.destroyToken();
                return error;
            })
    }
}

const mutations = {
    [SET_AUTH]: (state,data) => {
        state.status = data.status
        state.token = data.token
    },
    [SET_AUTH_ERROR]: (state,error) => {
        state.status = error
    },
}


export default {
    state,
    actions,
    mutations,
    getters
}