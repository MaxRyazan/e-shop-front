<template>
    <div class="__filters">
        <div class="inline _filters_items">
            <label class="title_filter_item">Только натуральная кожа</label>
            <button v-bind="store.leatherFlag" class="filter_leather leatherFlag" @click="choose_leather($event)"></button>
        </div>
        <div class="inline _filters_items">
            <label class="title_filter_item">Только в наличии</label>
            <button v-bind="store.availableFlag" class="filter_leather availableFlag" @click="choose_leather($event)"></button>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore()
function choose_leather($event)  {
    store.commit('choose_leather', $event)
}
</script>
