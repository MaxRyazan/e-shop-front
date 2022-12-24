<template>
<div class="__filters">
    <div class="inline _filters_items">
        <label class="title_filter_item">Сортировать по возрастанию цены</label>
        <button v-bind="store.sortByPriceIncrease" class="filter_leather sortByPriceIncrease" @click="sortByPrice($event)"></button>
    </div>
</div>
</template>

<script setup>
import { useStore } from "vuex";
import {watch} from "vue";

const store = useStore()
function sortByPrice($event){
    store.commit('sortByPrice', $event)
}

watch(() => store.state.sortByPriceIncrease, () => {
  if(store.state.sortByPriceIncrease)  {
      return store.getters.sortByPriceIncrease
  } else {
      return store.getters.defaultSort
  }
})

</script>
