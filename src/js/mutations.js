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
        // const temp = state.bags
        // const param = 'Натуральная кожа'
        if(event.target.innerHTML === ''){
            state.leatherFlag = true
            // console.log(state.bags[0].subCategories)
            // state.bags = state.bags.filter(item => item.subCategories.length === 3)

            // state.bags = state.bags.filter(item =>  item.subCategories.filter(sub => sub.title.includes(param)))
            event.target.innerHTML = '#'
        } else {
            if(event.target.innerHTML === '#'){
                state.leatherFlag = false
                event.target.innerHTML = ''
                // console.log(temp)
                // state.bags = temp
            }
        }
    },
}