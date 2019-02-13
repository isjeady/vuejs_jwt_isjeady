import ApiService from '@/common/api.service'
import {FETCH_ME} from './actions.type'
import {SET_ERRORS} from './mutations.type'

const state = {
    currentUser: {}
}

const getters = {
    isAdmin (state) {
        return state.currentUser && state.currentUser.role === 'admin'
    },
    getUSer (state) {
        return state.currentUser
    }
}

const actions = {
    [FETCH_ME](context) {
        return ApiService
            .get('/auth/me')
            .then(({ data }) => {
                context.commit('setCurrentUser', data.data);
                return data;
            })
            .catch(( response ) => {
                context.commit(SET_ERRORS, response);
            })      
    }
}

const mutations = {
    setCurrentUser(state, currentUser) {
        state.currentUser = currentUser
    }
}


export default {
    state,
    actions,
    mutations,
    getters
}