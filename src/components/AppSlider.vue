<template>
    <div class="toMove">
        <div v-if="item.photos.length === 3" class="inline slide" :class="'class'+item.productArticle">
            <div class="img_in_card " v-for="photo in item.photos" :key="photo">
                <img :src="getImage(photo)" alt="" class="h15vh">
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps} from 'vue'

defineProps({
    item:{
        type: Object,
        required: true
    }
})

const getImage = (photo) => require('@/assets/img/' + photo + '.png');

</script>
