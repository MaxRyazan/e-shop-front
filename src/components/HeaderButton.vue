<template>
  <div class="header_container_for_items">
    <div class="img_container">
      <img :src="path" alt="" class="header_button" @click="$emit('press')">
    </div>
    <h5 class="description"> <slot /> </h5>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    path: {
        type: String,
        required: true,
        default: ''
    }
})

</script>
