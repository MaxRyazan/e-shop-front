
export default {

    addProductToBasket(state, payload){
        state.inBasket.push(payload)
    },

    setProduct(state, item){
        state.product = item
        if(item !== null){
            state.bags = state.bags.filter(bag => bag.id !== item.id)
        }
    },

    setBags(state, item){
        state.bags = item
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

    sortByPrice(state, event){
        if(event.target.classList.contains('sortByPriceIncrease')) {
            if (event.target.innerHTML === '') {
                state.sortByPriceIncrease = true
                event.target.innerHTML = '#'
            } else {
                if (event.target.innerHTML === '#') {
                    state.sortByPriceIncrease = false
                    event.target.innerHTML = ''
                }
            }
        }
    }



}