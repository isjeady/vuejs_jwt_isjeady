import { SET_ERROR,SET_ERRORS} from './mutations.type'

const state = {
    error: null,
    errors: [],
}

const getters = {
    error(state) {
        return state.error
    },
    errors(state) {
        return state.errors
    }
}

const actions = {
}

const mutations = {
    [SET_ERROR](state, error) {
       state.error = error
    },
    [SET_ERRORS](state, errors) {
        state.errors = errors
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
