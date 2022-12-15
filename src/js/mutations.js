export default {
    addProductToBasket(state, payload){
        if(!payload.discount){
            state.inBasket.push(payload)
        } else {
            payload.productPrice = payload.productPrice * 0.8
            state.inBasket.push(payload)
        }
        console.log('В корзину добавлен товар:')
        console.log(payload)
        console.log('Сейчас в корзине:')
        console.log(state.inBasket)
    },

    removeProductFromBasket(state, payload){
        state.inBasket = state.inBasket.filter(item => item.id !== payload.id)
    },

    closeBasket(){
        document.querySelector('.basket').classList.add('hide')
    },

    closeAndClear(state){
        state.inBasket = []
        document.querySelector('.basket').classList.add('hide')
        document.querySelector('.basket_top').classList.add('hide')
    },
}