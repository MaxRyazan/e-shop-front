<template>
    <div class="inline search_container">
        <label class="search_label">Можно поискать...</label>
        <input class="search_input" v-model.lazy="searchParam">
        <button @click="findMatch" class="btn_search">найти</button>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import {ref} from "vue";

const store = useStore()
const searchParam = ref('')

const findMatch = () => {
        store.state.bags = store.getters.getPureBags.filter(bag => bag.productName.toLowerCase().indexOf(searchParam.value.toLowerCase()) !== -1)
}
</script>
