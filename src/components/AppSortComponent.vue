<template>
<div class="__filters">
    <div class="inline _filters_items">
        <label class="title_filter_item">Сортировать по цене</label>
        <button v-bind="store.sortByPriceFlag" class="filter_leather sortByPriceFlag" @click="sortByPrice($event)"></button>
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

watch(() => store.state.sortByPriceFlag, () => {
  if(store.state.sortByPriceFlag)  {
      return store.getters.sortByPriceToHight
  } else {
      return store.getters.defaultSort
  }
})

</script>
