export default {
    addProductToBasket(state, payload){
        if(!payload.discount){
            state.inBasket.push(payload)
        } else {
            payload.productPrice = payload.productPrice * 0.8
            state.inBasket.push(payload)
        }
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

    choose_leather(state, event){
        if(event.target.classList.contains('leatherFlag')) {
            if (event.target.innerHTML === '') {
                state.leatherFlag = true
                event.target.innerHTML = '#'
            } else {
                if (event.target.innerHTML === '#') {
                    state.leatherFlag = false
                    event.target.innerHTML = ''
                }
            }
        }
        if(event.target.classList.contains('availableFlag')) {
            if (event.target.innerHTML === '') {
                state.availableFlag = true
                event.target.innerHTML = '#'
            } else {
                if (event.target.innerHTML === '#') {
                    state.availableFlag = false
                    event.target.innerHTML = ''
                }
            }
        }
    },
}