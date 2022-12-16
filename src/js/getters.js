export default {
        getBags(state) {
            if(state.leatherFlag){
                let temp = []
                for(let i = 0; i <  state.bags.length; i ++){
                    console.log()
                    for(let j = 0; j < state.bags[i].subCategories.length; j++){
                        if(state.bags[i].subCategories[j].title === 'Натуральная кожа'){
                            temp.push(state.bags[i])
                        }
                    }
                }
                return temp
            }
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