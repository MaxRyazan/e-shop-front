<template>
  <div class="__filters">
    <div class="inline _filters_items">
      <label class="title_filter_item">Только натуральная кожа</label>
      <button v-bind="leatherFlag" class="filter_leather leatherFlag" @click="choose_leather"></button>
    </div>
    <div class="inline _filters_items">
      <label class="title_filter_item">Только в наличие</label>
      <button v-bind="availableFlag" class="filter_leather availableFlag" @click="choose_leather"></button>
    </div>
  </div>
  <div class="inline w99">
    <div class="root_container">
      <div v-for="item in getBags" :key="item.id" class="items_in_root">
        <div class="title">{{ item.productName }}</div>

        <div class="show_bags_inner">

        <app-slider :item="item" :key="item"></app-slider>

          <div>
            <button v-if="item.photos.length === 3" class="btn_buy btn_next" @click="action(item.productArticle)">Дальше</button>

            <div class="category">
              <h3>Описание:</h3>
              <div class="font_green">{{ item.productDescription }}</div>
            </div>

            <div class="sub_category">
              <div class="font_green" v-for="cat in item.subCategories" :key="cat"> - {{ cat.title }}</div>
            </div>

            <search-items-div>
              <template v-slot:title>Артикул: </template>
              <template v-slot:content>{{ item.productArticle }}</template>
            </search-items-div>

            <search-items-div>
              <template v-slot:title>Производитель: </template>
              <template v-slot:content>{{ item.productManufacturer }}</template>
            </search-items-div>

            <search-items-div>
              <template v-slot:title>Цена: </template>
              <template v-slot:content v-if="!item.discount">{{ item.productPrice }} &#x20bd;</template>
              <template v-slot:content v-else>{{ item.productPrice * discount }} &#x20bd;</template>
            </search-items-div>

            <div class="category">
              <h3>{{ checkProductStatus(item) }}</h3>
            </div>

            <div class="center">
              <button v-if="item.productStatus === 'AVAILABLE'"
                      class="btn_buy btn_hide"
                      @click="addThisProductToBasket(item)">Купить
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
        <slider-discount></slider-discount>
  </div>

  <div class="basketIcon" @click="showBasket">
    <img v-if="getBasket.length > 0" src="@/images/basketTop.png" alt="" class="basket_top">
    <basket-icon class="bst_icn"></basket-icon>
  </div>
  <show-basket></show-basket>
</template>

<script>
import SearchItemsDiv from "@/components/SearchItemsDiv";
import sliderDiscount from "@/components/SliderDiscount";
import BasketIcon from "@/components/BasketIcon";
import ShowBasket from "@/components/ShowBasket";
import { mapMutations, mapGetters } from 'vuex'
import AppSlider from "@/components/AppSlider";


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


    checkProductStatus(item) {
      return item.productStatus === 'AVAILABLE' ? 'В наличии' : 'Нет в наличии'
    },

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

  components: {AppSlider, SearchItemsDiv, BasketIcon, ShowBasket, sliderDiscount}
}
</script>
