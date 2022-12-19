<template>
  <div class="hide absolut basket border_green">
    <div v-if="getBasket.length > 0">
      <div v-for="(item, index) in getBasket" :key="item.id" class="inside_basket_line">
        <button class="close_and_delete_products_in_basket absolut" @click="closeAndClear">Удалить товары из корзины</button>
        <button class="close_button_basket absolut" @click="closeBasket">x</button>
        <div class="inline relative  padding2">
          <h4 class="description vertical_center">{{ index + 1 + ') ' + item.productName }}</h4>
          <img :src="getImgUrl(item.photos[0])" alt="" class="image_in_basket absolut">
          <h4 class="description vertical_center absolut priceInBasket">{{item.discount === 1 ? item.productPrice : item.productPrice * 0.8}} &#x20bd;</h4>
        </div>
      </div>
      <h4 class="absolut description result_price">Итого: {{ calculatedResultSum }} &#x20bd;</h4>
      <button class="absolut payment_btn">Перейти к оплате</button>
    </div>
    <div v-else>
      <button class="close_button_basket absolut" @click="closeBasket">x</button>
      <h4 class="description">Покупок нет!</h4>
    </div>
  </div>
  <div class="inBasket_sum">{{ createBasketTitle }} {{ calculatedResultSum }} {{ calculatedResultSum > 0 ? '&#x20bd;' : '' }}</div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'
export default {
  name: "ShowBasket",

  computed: {
    ...mapGetters({
      getBasket: "getBasket" ,
      calculatedResultSum: "calculatedResultSum",
      createBasketTitle: "createBasketTitle"
    }),
  },

  methods: {
    ...mapMutations({
      closeBasket: "closeBasket",
      closeAndClear: "closeAndClear"
    }),

    getImgUrl(photo) {
      return require('@/assets/img/' + photo + '.png');
    },
  }
}
</script>