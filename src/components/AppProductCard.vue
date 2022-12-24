<template>
    <div>
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
            <template v-slot:content v-else>
                <span class="discount_color_price">{{ item.productPrice / discount }}</span>
                <span class="font_green"> {{ item.productPrice }} &#x20bd;</span>
            </template>
        </search-items-div>

        <div class="category">
            <h3>{{ checkProductStatus(item) }}</h3>
        </div>

        <div class="center">
            <button v-if="item.productStatus === 'AVAILABLE'"
                    class="btn_buy"
                    @click = add(item)>Купить
            </button>
            <button v-else class="btn_deactive_red">Закончилось :(</button>
        </div>
    </div>
</template>

<script setup>
import SearchItemsDiv from "@/components/AppProductCardHelper";
import { defineProps} from 'vue'
import { useStore } from 'vuex'
defineProps({item:{type: Object}} )


const store  = useStore()
const discount = 0.8

const checkProductStatus = (item) => {
        return item.productStatus === 'AVAILABLE' ? 'В наличии' : 'Нет в наличии'
}

function add(item){
    store.state.inBasket.push(item)
}


</script>
