<template>
    <div  v-if="item.photos.length === 3" class="toMove">
        <div class="inline slide" :class="'class'+item.productArticle">
            <div class="img_in_card " v-for="photo in item.photos" :key="photo">
                <img :src="getImage(photo)" alt="" class="h15vh">
            </div>
        </div>
    </div>
    <div v-else class="toMove2">
        <div class="inline slide">
            <div class="img_in_card">
               <h5>Фото отсутствует</h5>
            </div>
        </div>
    </div>
    <button v-if="item.photos.length === 3" class="btn_buy btn_next" @click="$emit('action', item.productArticle)">Дальше</button>
    <button v-else class="btn_deactive"></button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'


defineProps({
    item:{
        type: Object,
        required: true
    }
})
defineEmits(['action'])

const getImage = (photo) => require('@/assets/img/' + photo + '.png');

</script>
