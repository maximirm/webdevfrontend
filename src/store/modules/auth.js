import {router} from "../../main";


const state = {
    loginStatus: false
};

const getters = {

    isLoggedIn: state => !!state.loginStatus

};

const actions = {

    finalizeLogin: ({ commit }) => {
        commit('setLoginStatus', true);
        router.push('/mainPage')
            .catch(()=>{});
    },

    logout: ({ commit }) => {
        commit('setLoginStatus', false);
        router.push('/')
            .catch(()=>{});
    }

};

const mutations = {

    setLoginStatus: (state, newStatus) => state.loginStatus = newStatus

};

export default {
    state,
    getters,
    actions,
    mutations
}
