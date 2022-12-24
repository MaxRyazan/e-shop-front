<template>
  <div class="product_discount">
    <div class="slide">
      <div class="container_for_discount_img" v-cloak>
        <div class="test">
          <div class="discountProducts mb5" v-for="item in products" :key="item.id">
            <img v-if="item.photos.length === 3" :src="getImgUrl(item.photos[0])" alt="" class="w99 h12" @click="setProduct(item)">
            <h4 class="description discountTitle border_green">Цена: {{ item.productPrice }} &#x20bd;</h4>
          </div>
        </div>
      </div>
    </div>
  </div>

  <modal-discount-window  @close-window="setProduct(null)"></modal-discount-window>
</template>

<script>
import ModalDiscountWindow from "@/components/AppModalDiscountWindow";

import {mapGetters, mapMutations} from "vuex";


export default {
  name: "SliderDiscount",
   mounted() {
     this.getDiscountProducts();
  },


  data() {
    return {
      DISCOUNT_URL: ' http://localhost:8088/product/discount',
      products: [],
      count: 1
    }
  },


  methods: {
    async getDiscountProducts() {
      const productsWithDiscount = await fetch(this.DISCOUNT_URL)
      this.products = await productsWithDiscount.json()

      let movedDiv = document.querySelector('.test').style
      let count = 0
      setInterval(() => {
        movedDiv.bottom = count + 0.001 + 'vh'
        count += 0.1
        const size = document.querySelector('.test').children.length * 22.5
        if (count >= size) {
          count = -60
        }
      }, 25)
    },

      ...mapMutations({
          setProduct: "setProduct"
      }),


    getImgUrl(photo) {
      return require('@/assets/img/' + photo + '.png');
    },

  },
    computed:{
        ...mapGetters({
            getProduct: "getProduct"
        }),
    },

  components:{ModalDiscountWindow}

}
</script>

