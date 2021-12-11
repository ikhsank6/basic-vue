import { createStore } from "vuex";

export default createStore({
    state: {
        pilihHalaman: 1
    },
    getters: {
        pilihHalaman: state => {
            return state.pilihHalaman
        }
    },
    mutations: {
    },
    actions: {}
});