<template>
    <div class="toMove">
        <div v-if="item.photos.length === 3" class="inline slide" :class="'class'+item.productArticle">
            <div class="img_in_card " v-for="photo in item.photos" :key="photo">
                <img :src="getImgUrl(photo)" alt="" class="h15vh">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppSlider",
    props:['item'],
    methods:{
        getImgUrl(photo) {
            return require('@/assets/img/' + photo + '.png');
        },
    }
}
</script>

<style scoped>

</style>