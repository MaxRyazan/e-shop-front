<template>
    <div>
        {{ sumToPay }}
    </div>
</template>

<script setup>
import { useStore } from "vuex";


const store = useStore()

const sumToPay = store.state.inBasket.reduce((sum, item) => sum + item.productPrice, 0)

</script>
