<template>
  <div v-if="product != null" class="modal_info border_green" ref="modal">
      <app-slider :item="product"></app-slider>
      <div class="description_in_discount">
          <button class="close_button_discount" @click="$emit('closeWindow')">x</button>
          <h4 class="description item_in_discount">{{ product.productName }}</h4>
          <h4 class="description item_in_discount">{{ product.productDescription }}</h4>
          <h4 class="description item_in_discount">{{ product.productManufacturer }}</h4>
          <h4 class="description item_in_discount">{{ product.productPrice }}</h4>
          <div class="buttons_discount">
              <button class="btn_buy" @click="action(product.productArticle)">Дальше</button>
              <button class="btn_in_discount" @click="addThisProductToBasket(product)">Купить</button>
          </div>
      </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import AppSlider from "@/components/AppSlider";

export default {
  name: "ModalDiscountWindow",
    components: {AppSlider},

    props: ['product'],
    emits: ['closeWindow', 'test'],

    data(){
      return{
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

  }
}
</script>
