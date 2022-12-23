export default {

        getBags(state) {
            if (state.leatherFlag) {
                let temp = []
                for (let i = 0; i < state.bags.length; i++) {
                    for (let j = 0; j < state.bags[i].subCategories.length; j++) {
                        if (state.bags[i].subCategories[j].title === 'Натуральная кожа') {
                            temp.push(state.bags[i])
                        }
                    }
                }
                if (!state.availableFlag) {
                    return temp
                } else {
                    if (state.availableFlag) {
                        for (let i = 0; i < temp.length; i++) {
                            if (temp[i].productStatus !== 'AVAILABLE') {
                                temp.splice(i, 1)
                            }
                        }
                    }
                    return temp
                }
            }

            if (state.availableFlag) {
                let temp = []
                for (let i = 0; i < state.bags.length; i++) {
                    if (state.bags[i].productStatus === 'AVAILABLE') {
                        temp.push(state.bags[i])
                    }
                }
                return temp
            }
            return state.bags
        },

        getProduct(state){
            return state.product
        },

        getDiscount(state){
            return state.discount
        },

        getBasket(state){
            return state.inBasket
        },

        getLeatherFlag(state){
            return state.leatherFlag
        },

        getAvailableFlag(state){
            return state.availableFlag
        },

        calculatedResultSum(state) {
            let sum = 0
            if (state.inBasket.length > 0) {
                for(let item of state.inBasket){
                  sum  += item.productPrice
                }
                return sum
            } else {
                    return ''
                }
        },


        createBasketTitle(state) {
            return state.inBasket.reduce((sum, item) => sum + item.productPrice, 0) > 0 ? 'Текущая сумма покупок:' : 'Корзина пока еще пуста('
        },


}