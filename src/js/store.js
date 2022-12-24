import { createStore } from 'vuex'
import mutations from "@/js/mutations";
import getters from "@/js/getters";
import actions from "@/js/actions";


export default createStore({
    state() {
        return {
            inBasket: [],
            bags: [],
            leatherFlag: false,
            availableFlag: false,
            sortByPriceIncrease: false,
            sortByPriceDecrease: false,
            product: null,
            discount: 0.8
        }
    },

    mutations: mutations,
    getters: getters,
    actions: actions
})