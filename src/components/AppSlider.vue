<template>
    <div class="toMove">
        <div v-if="item.photos.length === 3" class="inline slide" :class="'class'+item.productArticle">
            <div class="img_in_card " v-for="photo in item.photos" :key="photo">
                <img :src="getImage(photo)" alt="" class="h15vh">
            </div>
        </div>
    </div>
    <button v-if="item.photos.length === 3" class="btn_buy btn_next" @click="$emit('action', item.productArticle)">Дальше</button>
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
