import { createStore } from 'vuex'
import mutations from "@/js/mutations";
import getters from "@/js/getters";


export default createStore({
    state() {
        return {
            inBasket: [],
            bags: [],
            leatherFlag: false
        }
    },

    mutations: mutations,
    getters: getters,
})