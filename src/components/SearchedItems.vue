<template>
      <app-leather-filters></app-leather-filters>
      <app-sort-component></app-sort-component>
      <div class="inline w99">
        <div class="root_container">
          <div v-for="item in getBags" :key="item.id" class="items_in_root">
            <div class="title">{{ item.productName }}</div>
            <div class="show_bags_inner">
                <app-slider :item="item" :key="item" @action="action(item.productArticle)"></app-slider>
                <app-product-card :item="item" @addThisProductToBasket="addThisProductToBasket"></app-product-card>
            </div>
          </div>
        </div>
        <slider-discount></slider-discount>
      </div>

      <div class="basketIcon" @click="showBasket">
    <img v-if="getBasket.length > 0" src="@/images/basketTop.png" alt="" class="basket_top">
      <img src="@/images/basketIcon.png" alt="">
  </div>
      <show-basket></show-basket>
</template>

<script>
import sliderDiscount from "@/components/SliderDiscount";
import ShowBasket from "@/components/ShowBasket";
import { mapMutations, mapGetters } from 'vuex'
import AppSlider from "@/components/AppSlider";
import AppProductCard from "@/components/AppProductCard";
import AppLeatherFilters from "@/components/AppLeatherFilters";
import AppSortComponent from "@/components/AppSortComponent";


export default {
  name: "SearchedItems",
  props: ['product'],

  data() {
    return {
      count: 1,
      discount: 0.8,
    }
  },

  methods: {
    ...mapMutations({
      addThisProductToBasket: "addProductToBasket",
      choose_leather: "choose_leather"
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

    showBasket() {
      document.querySelector('.basket').classList.remove('hide')
    },

    getImgUrl(photo) {
      return require('@/assets/img/' + photo + '.png');
    },

  },

  computed:{
    ...mapGetters({
      getBasket: "getBasket",
      getBags: "getBags",
      leatherFlag: "getLeatherFlag",
      availableFlag: "getAvailableFlag"

    })
  },

  components: {AppSortComponent, AppLeatherFilters, AppProductCard, AppSlider, ShowBasket, sliderDiscount}
}
</script>
