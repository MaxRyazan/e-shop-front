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
import HeaderButton from "@/components/HeaderButton";
import SearchedItems from "@/components/SearchedItems";
import store from "@/js/store";
export default {
  name: "AppHeader",
  methods: {
    async searchBags(param) {
      console.log('Ищем в базе')
      const data = await fetch('http://localhost:8088/product/' + param)

      store.state.bags = await data.json()
      console.log('Нашли: ' + store.state.bags)
    },
  },
  data() {
    return {
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
