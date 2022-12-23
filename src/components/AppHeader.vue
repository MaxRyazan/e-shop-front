<template>
  <div class="header_main">
    <header-button :path="woman" @press="searchBags('WOMAN_BAG')">Девушкам</header-button>
    <header-button :path="man" @press="searchBags('MAN_BAG')">Мужчинам</header-button>
    <header-button :path="wallet" @press="searchBags('WALLET')">Кошельки</header-button>
    <header-button :path="suitcase" @press="searchBags('SUITCASE')">Чемоданы</header-button>
    <header-button :path="umbrella" @press="searchBags('UMBRELLA')">Зонты</header-button>
    <header-button :path="belts" @press="searchBags('BELT')">Ремни</header-button>
  </div>
  <searched-items></searched-items>
</template>


<script>
import "../styles/header_styles.css"
import HeaderButton from "@/components/AppHeaderButton";
import SearchedItems from "@/components/SearchedItems";

import {mapGetters, mapMutations} from "vuex";
export default {
  name: "AppHeader",
  methods: {
    async searchBags(param) {
      const data = await fetch('http://localhost:8088/product/' + param)
       this.searchedBags =  await data.json()
        if(this.getProduct){
            this.setBags(this.searchedBags.filter(bag => bag.id !== this.getProduct.id))
        } else {
            this.setBags(this.searchedBags)
        }

    },
      ...mapMutations({
          setBags: "setBags"
      })
  },

    computed:{
      ...mapGetters({
          getProduct: "getProduct"
      })
    },
  data() {
    return {
      searchedBags: [],
      woman: require('@/images/woman_bag.png'),
      man: require('@/images/man_bag.png'),
      wallet: require('@/images/wallet.png'),
      suitcase: require('@/images/suitcase.png'),
      umbrella: require('@/images/umbrella.png'),
      belts: require('@/images/belt.png'),
    }
  },



  components: {HeaderButton, SearchedItems},
}

</script>
