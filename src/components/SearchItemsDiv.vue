<template>
  <div class="category">
    <h3> <slot name="title" />
      <span class="fontGreen"> <slot name="content" /> </span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "SearchItemsDiv",
  props: {
    title:{
      type: String
    }
  }
}
</script>
