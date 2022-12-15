export default {
        getBags(state) {
            return state.bags
        },

        getBasket(state){
            console.log('Корзина:')
            console.log(state.inBasket)
            return state.inBasket
        },

        calculatedResultSum(state) {
            console.log('Считаем сумму заказа...')
            if (state.inBasket.length > 0) {
                return state.inBasket.reduce((sum, item) => sum + item.productPrice, 0)
            } else {
                return ''
            }
        },

        createBasketTitle(state) {
            return state.inBasket.reduce((sum, item) => sum + item.productPrice, 0) > 0 ? 'Текущая сумма покупок:' : 'Корзина пока еще пуста('
        },

}