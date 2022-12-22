<template>
  <div v-if="product != null" class="modal_info border_green" ref="modal">
<!--      <app-slider :item="product" :key="product.id" @action="action(product.productArticle)"></app-slider>-->
<!--      <div class="description_in_discount">-->
<!--          <button class="close_button_discount" @click="$emit('closeWindow')">x</button>-->
<!--          <h4 class="description item_in_discount">{{ product.productName }}</h4>-->
<!--          <h4 class="description item_in_discount">{{ product.productDescription }}</h4>-->
<!--          <h4 class="description item_in_discount">{{ product.productManufacturer }}</h4>-->
<!--          <h4 class="description item_in_discount">{{ product.productPrice }}</h4>-->
<!--          <div class="buttons_discount">-->

<!--              <button class="btn_in_discount" @click="addThisProductToBasket(product)">Купить</button>-->
<!--          </div>-->
<!--      </div>-->

      <app-product-card :item="product" @addThisProductToBasket="addThisProductToBasket(product)"></app-product-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import AppProductCard from "@/components/AppProductCardHelper";

export default {
    name: "ModalDiscountWindow",

    props: ['product'],
    emits: ['closeWindow'],

    data() {
        return {
            count: 1
        }
    },

    methods: {
        getImgUrl(photo) {
            return require('@/assets/img/' + photo + '.png');
        },

        ...mapMutations({
            addThisProductToBasket: "addProductToBasket"
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
    components: {AppProductCard}
}
</script>
