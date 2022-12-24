<template>
  <div v-if="getProduct !== null" class="modal_info border_green">
      <app-slider :item="getProduct" :key="getProduct.id" @action="action(getProduct.productArticle)"></app-slider>
      <div class="description_in_discount">
          <button class="close_button_discount" @click="setProduct(null)">x</button>
          <h4 class="description item_in_discount">{{ getProduct.productName }}</h4>
          <h4 class="description item_in_discount">{{ getProduct.productDescription }}</h4>
          <h4 class="description item_in_discount">{{ getProduct.productManufacturer }}</h4>
          <h4 class="description item_in_discount">{{ getProduct.productPrice }}</h4>
          <div class="buttons_discount">
             <button class="btn_in_discount" @click="addThisProductToBasket(getProduct)">Купить</button>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import AppSlider from "@/components/AppSlider"

export default {
    name: "ModalDiscountWindow",

    data() {
        return {
            count: 1,
        }
    },

    methods: {
        getImgUrl(photo) {
            return require('@/assets/img/' + photo + '.png');
        },


        ...mapMutations({
            addThisProductToBasket: "addProductToBasket",
            setProduct: "setProduct"
        }),

        action(param) {
            let blockToMove = document.querySelector('.class' + param)
            blockToMove.style.translate = -(document.querySelector('.h15vh').clientWidth * this.count) + 1 + 'px'
            this.count++;
            if (this.count >= 4) {
                this.count = 1
                blockToMove.style.translate = ''
            }
        },

    },
    computed:{
        ...mapGetters({
            getProduct: "getProduct"
        }),
    },

    components: {AppSlider}
}
</script>
