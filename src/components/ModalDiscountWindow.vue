<template>
  <div v-if="product != null" class="modal_info border_green" ref="modal">
      <img :src="getImgUrl(product.photos[0])" alt="" class="h23vh ttt">
      <div class="description_in_discount">
      <button class="close_button_discount" @click="$emit('closeWindow')">x</button>
      <h4 class="description item_in_discount">{{ product.productName }}</h4>
      <h4 class="description item_in_discount">{{ product.productDescription }}</h4>
      <h4 class="description item_in_discount">{{ product.productManufacturer }}</h4>
      <h4 class="description item_in_discount">{{ product.productPrice }}</h4>
      <div class="buttons_discount">
        <button class="btn_in_discount" @click="addThisProductToBasket(product)">Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ModalDiscountWindow",
  props: ['product'],
  emits: ['closeWindow', 'test'],

  methods: {
    getImgUrl(photo) {
      return require('@/assets/img/' + photo + '.png');
    },

    ...mapMutations({
      addThisProductToBasket: "addProductToBasket"
    }),
  }
}
</script>
