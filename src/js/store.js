import { createStore } from 'vuex'
import basketMutations from "@/js/basket/basketMutations";
import basketGetters from "@/js/basket/basketGetters";

export default createStore({
    state() {
        return {
            inBasket: []
        }
    },

    mutations: basketMutations,

    getters: basketGetters
})